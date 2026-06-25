"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, Globe, Users, Wrench, FileText, BookOpen, Hash } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/language-context";
import { searchIndex, type SearchEntry } from "@/lib/search-index";

function fuzzyMatch(text: string, query: string): boolean {
  const lower = text.toLowerCase();
  const terms = query.toLowerCase().split(/\s+/);
  return terms.every((term) => lower.includes(term));
}

function searchEntries(query: string, language: "tr" | "en"): SearchEntry[] {
  if (!query.trim() || query.trim().length < 2) return [];
  const seen = new Set<string>();
  const results: { entry: SearchEntry; score: number }[] = [];

  for (const entry of searchIndex) {
    let score = 0;
    const t = entry.title[language];
    const d = entry.description[language];
    const c = entry.content[language];

    const qLower = query.toLowerCase();
    if (t.toLowerCase().includes(qLower)) score += 10;
    if (d.toLowerCase().includes(qLower)) score += 6;
    if (fuzzyMatch(c, query)) score += 3;

    if (score > 0 && !seen.has(entry.href + entry.title[language])) {
      seen.add(entry.href + entry.title[language]);
      results.push({ entry, score });
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, 8).map((r) => r.entry);
}

function entryIcon(href: string) {
  if (href.startsWith("/team")) return Users;
  if (href.startsWith("/suas")) return Wrench;
  if (href.startsWith("/projelerimiz")) return Globe;
  if (href.startsWith("/blog")) return FileText;
  if (href.startsWith("/iletisim")) return Hash;
  return BookOpen;
}

function entryHref(entry: SearchEntry): string {
  return entry.hash ? `${entry.href}${entry.hash}` : entry.href;
}

export function SearchTrigger({ onClick }: { onClick: () => void }) {
  const { language } = useLanguage();
  const label = language === "tr" ? "Ara" : "Search";

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        onClick();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClick]);

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.15 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors shadow-lg shadow-black/30"
    >
      <Search className="h-4 w-4 md:h-[18px] md:w-[18px]" />
    </motion.button>
  );
}

export function SearchInput({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [dropdownRect, setDropdownRect] = useState<DOMRect | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const router = useRouter();

  const results = useMemo(() => searchEntries(query, language), [query, language]);

  const t =
    language === "tr"
      ? { placeholder: "Ara...", noResults: "Sonuç bulunamadı" }
      : { placeholder: "Search...", noResults: "No results found" };

  const close = useCallback(() => {
    setQuery("");
    setDropdownRect(null);
    onClose();
  }, [onClose]);

  const navigate = useCallback(
    (entry: SearchEntry) => {
      const href = entryHref(entry);
      const [path, hash] = href.split("#");
      close();
      router.push(href);
      if (hash) {
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
      }
    },
    [close, router]
  );

  useEffect(() => {
    inputRef.current?.focus();
    const rect = inputRef.current?.getBoundingClientRect();
    if (rect) {
      setDropdownRect(DOMRect.fromRect({ x: rect.left, y: rect.bottom + 8, width: rect.width, height: 0 }));
    }
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [close]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [close]);

  const showDropdown = query.trim().length >= 2;

  return (
    <>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.12 }}
        className="relative flex items-center gap-2 w-full"
      >
        <div className="relative flex-1 min-w-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              const rect = containerRef.current?.querySelector("input")?.getBoundingClientRect();
              if (rect) {
                setDropdownRect(DOMRect.fromRect({ x: rect.left, y: rect.bottom + 8, width: rect.width, height: 0 }));
              }
            }}
            placeholder={t.placeholder}
            className="w-full h-8 pl-[34px] pr-3 text-[13px] bg-white/[0.06] border border-white/[0.12] rounded-full text-white placeholder:text-neutral-500 outline-none focus:border-white/[0.25] focus:bg-white/[0.08] transition-all duration-200"
          />
        </div>
        <motion.button
          type="button"
          onClick={close}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] transition-colors"
        >
          <X className="h-3 w-3" />
        </motion.button>
      </motion.div>

      {showDropdown &&
        dropdownRect &&
        createPortal(
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.12 }}
            style={{
              position: "fixed",
              top: dropdownRect.y,
              left: dropdownRect.x,
              width: dropdownRect.width,
              zIndex: 200,
            }}
            className="bg-[#0d0d0d] border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/60 backdrop-blur-2xl overflow-hidden max-h-[60vh] overflow-y-auto"
          >
            {results.length === 0 ? (
              <div className="px-5 py-6 text-center">
                <p className="text-sm text-neutral-500">{t.noResults}</p>
              </div>
            ) : (
              <div className="py-2">
                {results.map((entry, i) => {
                  const Icon = entryIcon(entry.href);
                  const prevHref = i > 0 ? entryHref(results[i - 1]).split("#")[0] : "";
                  const curHref = entryHref(entry).split("#")[0];
                  const showDivider = i > 0 && prevHref !== curHref;
                  return (
                    <div key={entry.href + (entry.hash || "") + i}>
                      {showDivider && <div className="mx-4 my-1 border-t border-white/[0.04]" />}
                      <button
                        type="button"
                        onClick={() => navigate(entry)}
                        className="w-full flex items-center gap-3.5 mx-2 px-3 py-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group text-left"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:bg-white/[0.08] group-hover:border-white/[0.1] transition-colors">
                          <Icon className="h-3.5 w-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white group-hover:text-primary transition-colors truncate">
                            {entry.title[language]}
                          </p>
                          <p className="text-[11px] text-neutral-500 truncate mt-0.5">
                            {entry.description[language]}
                          </p>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 text-neutral-700 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>,
          document.body
        )}
    </>
  );
}
