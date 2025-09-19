"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Settings, Palette } from "lucide-react";
import ThemeSelector from "@/components/shared/templates/themes/theme-selector";

export default function SettingsThemes() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 right-4 z-50 h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm border shadow-sm hover:bg-accent"
        >
          <Palette className="h-4 w-4" />
          <span className="sr-only select-none">Theme Settings</span>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        side="left"
        align="start"
        className="w-auto p-0 border shadow-lg"
        sideOffset={8}
      >
        <ThemeSelector />
      </PopoverContent>
    </Popover>
  );
}
