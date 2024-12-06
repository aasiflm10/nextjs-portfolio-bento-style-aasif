"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="relative inline-flex"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <Sun
        size={"16"}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />

      <Moon
        size={"16"}
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />

      <span className="sr-only">Toggle Theme</span>
    </button>
  );
}
