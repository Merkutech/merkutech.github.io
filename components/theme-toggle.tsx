'use client'

import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";

type Theme = "dark" | "light";
export type ThemeChoice = "light" | "system" | "dark";

const STORAGE_KEY = "merkutech-theme";
const CHOICES: ThemeChoice[] = ["light", "system", "dark"];

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function readChoice(): ThemeChoice {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") return stored;
  } catch {
    /* ignore */
  }
  return "system";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("light", theme === "light");
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;

  let link = document.querySelector<HTMLLinkElement>("link[rel='icon'][data-theme-aware]");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.setAttribute("data-theme-aware", "");
    document.head.appendChild(link);
  }
  link.href = theme === "light" ? "/logo-black.png" : "/logo-white.png";
}

function applyChoice(choice: ThemeChoice) {
  applyTheme(choice === "system" ? getSystemTheme() : choice);
  document.documentElement.dataset.themeChoice = choice;
}

const THEME_EVENT = "merkutech-theme-change";

/* Shared theme state: every toggle on the page stays in sync */
export function useThemeChoice() {
  const [choice, setChoiceState] = useState<ThemeChoice>("system");

  useEffect(() => {
    // Hydration resets <html> attributes, so re-apply what the head script set
    const initial = readChoice();
    applyChoice(initial);
    queueMicrotask(() => setChoiceState(initial));

    const onChange = (e: Event) => setChoiceState((e as CustomEvent<ThemeChoice>).detail);
    window.addEventListener(THEME_EVENT, onChange);

    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onSystem = () => {
      if (readChoice() === "system") applyChoice("system");
    };
    media.addEventListener("change", onSystem);

    return () => {
      window.removeEventListener(THEME_EVENT, onChange);
      media.removeEventListener("change", onSystem);
    };
  }, []);

  const setChoice = useCallback((next: ThemeChoice) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    applyChoice(next);
    window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: next }));
  }, []);

  return [choice, setChoice] as const;
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z" />
    </svg>
  );
}

const ICONS = { light: SunIcon, system: SystemIcon, dark: MoonIcon };

export function ThemeToggle() {
  const [choice, setChoice] = useThemeChoice();
  const { language } = useLanguage();

  const labels =
    language === "tr"
      ? { group: "Renk teması", light: "Açık tema", system: "Sistem teması", dark: "Koyu tema" }
      : { group: "Color theme", light: "Light theme", system: "System theme", dark: "Dark theme" };

  return (
    <div
      role="group"
      aria-label={labels.group}
      suppressHydrationWarning
      className="seg-control seg-theme"
    >
      <span className="seg-thumb" aria-hidden="true" />
      {CHOICES.map((c) => {
        const Icon = ICONS[c];
        return (
          <button
            key={c}
            type="button"
            onClick={() => setChoice(c)}
            aria-pressed={choice === c}
            aria-label={labels[c]}
            title={labels[c]}
            data-choice={c}
            className="seg-option"
          >
            <Icon />
          </button>
        );
      })}
    </div>
  );
}
