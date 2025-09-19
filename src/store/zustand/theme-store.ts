import { create } from "zustand";

type ThemeName = "yellow" | "blue" | "emerald" | "violet" | "orange";
type Mode = "light" | "dark";

type ThemeState = {
  theme: Mode;
  color: ThemeName;
  setTheme: (theme: Mode) => void;
  setColor: (color: ThemeName) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "light",
  color: "yellow",
  setTheme: (theme) => set({ theme }),
  setColor: (color) => set({ color }),
}));