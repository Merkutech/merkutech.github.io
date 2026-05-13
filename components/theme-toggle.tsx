'use client'

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("light", theme === "light");
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const systemTheme = getSystemTheme();

    applyTheme(systemTheme);
    queueMicrotask(() => setTheme(systemTheme));
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Koyu temaya geç" : "Açık temaya geç"}
      aria-pressed={theme === "light"}
      suppressHydrationWarning
      className="theme-toggle-button inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-neutral-500 transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.08] hover:text-white md:h-9 md:w-9"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  );
}
