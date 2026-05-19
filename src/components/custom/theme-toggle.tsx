'use client';

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const seg = (active: boolean) => `
  inline-flex items-center justify-center w-5 h-full rounded-full leading-none
  transition-all duration-200 ease-out
  ${active
    ? "text-background bg-foreground"
    : "text-muted-foreground hover:text-foreground"
  }
`;

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Theme"
      className="inline-flex items-center h-2.5 rounded-full bg-muted/40 border border-border/60 backdrop-blur-sm"
    >
      <button
        type="button"
        aria-pressed={!isDarkMode}
        onClick={() => { if (isDarkMode) toggleTheme(); }}
        className={seg(!isDarkMode)}
        aria-label="Light mode"
      >
        <Sun className="w-2 h-2" />
      </button>
      <button
        type="button"
        aria-pressed={isDarkMode}
        onClick={() => { if (!isDarkMode) toggleTheme(); }}
        className={seg(isDarkMode)}
        aria-label="Dark mode"
      >
        <Moon className="w-2 h-2" />
      </button>
    </div>
  );
}
