"use client";

import { useThemeStore } from "@/store/zustand/theme-store";
import { Switch } from "@/components/ui/switch";
import { Sun, Check, Moon } from "lucide-react";

const colorOptions = [
  {
    value: "blue",
    label: "Cyan",
    description: "Professional blue theme",
    color: "#3B82F6",
  },
  {
    value: "violet",
    label: "Rose",
    description: "Elegant rose theme",
    color: "#8B5CF6",
  },
  {
    value: "yellow",
    label: "Yellow",
    description: "Warm amber theme",
    color: "#EAB308",
  },
  {
    value: "emerald",
    label: "Emerald",
    description: "Fresh green theme",
    color: "#10B981",
  },
  {
    value: "orange",
    label: "Orange",
    description: "Vibrant orange theme",
    color: "#F97316",
  },
];

export default function ThemeSelector() {
  const { theme, color, setTheme, setColor } = useThemeStore();

  return (
    <div className="w-64 space-y-6 p-4 select-none">
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-foreground">Appearance</h3>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            {theme === "dark" && <Moon className="h-4 w-4 text-primary" />}
            {theme === "light" && <Sun className="h-4 w-4 text-primary" />}
            <span className="text-sm">
              {theme === "dark" ? "Dark" : "Light"} Mode
            </span>
          </div>
          <Switch
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            className="data-[state=checked]:bg-primary"
          />
        </div>
      </div>

      {/* Color Theme Section */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-foreground">Color Theme</h3>
        <div className="space-y-1">
          {colorOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setColor(option.value as any)}
              className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: option.color }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: option.color, opacity: 0.6 }}
                />
              </div>
              <div className="flex-1 text-left">
                <div className="text-sm font-medium">{option.label}</div>
                <div className="text-xs text-muted-foreground">
                  {option.description}
                </div>
              </div>
              {color === option.value && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
