"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { PiListBulletsBold } from "react-icons/pi";

export default function TrigerSidebar() {
  const { toggleSidebar, open, openMobile, isMobile } = useSidebar();
  return (
    <div className="relative rounded-full">
      <PiListBulletsBold
        color="#C6C6C6"
        size={27}
        className={`rounded-full cursor-pointer`}
        onClick={() => toggleSidebar()}
      />
    </div>
  );
}
