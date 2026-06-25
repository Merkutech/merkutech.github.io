"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, Globe, Users, Wrench, FileText, BookOpen, Hash } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/language-context";
import { searchIndex, type SearchEntry } from "@/lib/search-index";

function searchEntries(query: string, language: "tr" | "en"): SearchEntry[] {
  if (!query.trim() || query.trim().length < 2) return [];
  const seen = new Set<string>();
  const results: { entry: SearchEntry; score: number }[] = [];

  const qLower = query.toLowerCase();
  const terms = qLower.split(/\s+/);

  for (const entry of searchIndex) {
    let score = 0;
    const t = entry.title[language].toLowerCase();
    const d = entry.description[language].toLowerCase();
    const c = entry.content[language].toLowerCase();

    if (t.includes(qLower)) score += 10;
    else if (terms.every((term) => t.includes(term))) score += 8;
    if (d.includes(qLower)) score += 6;
    if (terms.every((term) => c.includes(term))) score += 3;

    const key = entry.href + entry.title[language];
    if (score > 0 && !seen.has(key)) {
      seen.add(key);
      results.push({ entry, score });
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, 8).map((r) => r.entry);
}

function resultIcon(href: string) {
  if (href.startsWith("/team")) return Users;
  if (href.startsWith("/suas")) return Wrench;
  if (href.startsWith("/projelerimiz")) return Globe;
  if (href.startsWith("/blog")) return FileText;
  if (href.startsWith("/iletisim")) return Hash;
  return BookOpen;
}

function fullHref(entry: SearchEntry): string {
  return entry.hash ? `${entry.href}${entry.hash}` : entry.href;
}

export function SearchTrigger({ onClick }: { onClick: () => void }) {
  const { language } = useLanguage();
  const label = language === "tr" ? "Ara" : "Search";

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") { e.preventDefault(); onClick(); }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClick]);

  return (
    <motion.button
      type="button" onClick={onClick} aria-label={label}
      initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.15 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
      className="inline-flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-white text-black hover:bg-neutral-200 transition-colors shadow-lg shadow-black/30"
    >
      <Search className="h-4 w-4 md:h-[18px] md:w-[18px]" />
    </motion.button>
  );
}

export function SearchInput({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const router = useRouter();
  const results = useMemo(() => searchEntries(query, language), [query, language]);

  const txt =
    language === "tr"
      ? { placeholder: "Ara...", empty: "Sonuç bulunamadı" }
      : { placeholder: "Search...", empty: "No results found" };

  const close = useCallback(() => { setQuery(""); onClose(); }, [onClose]);

  const go = useCallback((entry: SearchEntry) => {
    const href = fullHref(entry);
    const hash = href.includes("#") ? href.split("#")[1] : "";
    close();
    router.push(href);
    if (hash) setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "center" }), 200);
  }, [close, router]);

  useEffect(() => { inputRef.current?.focus(); }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [close]);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (barRef.current && !barRef.current.contains(e.target as Node)) close();
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [close]);

  const show = query.trim().length >= 2;

  return (
    <div ref={barRef} className="flex items-center gap-2 w-full">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-500" />
        <input
          ref={inputRef} type="text" value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={txt.placeholder}
          className="w-full h-8 pl-[34px] pr-3 text-xs bg-white/[0.04] border border-white/[0.1] rounded-full text-white placeholder:text-neutral-500 outline-none focus:border-white/[0.2] focus:bg-white/[0.06] transition-all duration-200"
        />

        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
                className="absolute top-full mt-2 left-0 right-0 rounded-2xl border border-white/[0.1] bg-white/[0.04] backdrop-blur-2xl shadow-xl shadow-black/40 overflow-hidden z-[200] max-h-[55vh] overflow-y-auto"
              >
                {results.length === 0 ? (
                  <p className="px-4 py-6 text-center text-sm text-neutral-500">{txt.empty}</p>
                ) : (
                  results.map((entry, i) => {
                    const Icon = resultIcon(entry.href);
                    const prev = i > 0 ? fullHref(results[i - 1]).split("#")[0] : "";
                    const cur = fullHref(entry).split("#")[0];
                    return (
                      <div key={entry.href + (entry.hash || "") + i}>
                        {i > 0 && prev !== cur && <div className="mx-4 border-t border-white/[0.06]" />}
                        <button
                          type="button" onClick={() => go(entry)}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/[0.05] transition-colors text-left group"
                        >
                          <span className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:bg-white/[0.08] group-hover:border-white/[0.14] transition-colors">
                            <Icon className="h-3.5 w-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                          </span>
                          <span className="flex-1 min-w-0">
                            <span className="block text-sm font-medium text-white group-hover:text-primary transition-colors truncate">
                              {entry.title[language]}
                            </span>
                            <span className="block text-xs text-neutral-500 truncate mt-0.5">
                              {entry.description[language]}
                            </span>
                          </span>
                          <ArrowRight className="h-3.5 w-3.5 text-neutral-600 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
                        </button>
                      </div>
                    );
                  })
                )}
              </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        type="button" onClick={close}
        className="shrink-0 h-8 w-8 rounded-full border border-white/[0.1] bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.16] transition-colors inline-flex items-center justify-center"
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  );
}
