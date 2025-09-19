"use client";

import { useThemeStore } from "@/store/zustand/theme-store";
import { useEffect } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, color } = useThemeStore();
  
  useEffect(() => {
    const root = document.documentElement;
    
    root.classList.toggle("dark", theme === "dark");
    
    root.classList.remove("theme-yellow", "theme-blue", "theme-emerald", "theme-violet", "theme-orange");
    
    root.classList.add(`theme-${color}`);
  }, [theme, color]);

  return <>{children}</>;
}
