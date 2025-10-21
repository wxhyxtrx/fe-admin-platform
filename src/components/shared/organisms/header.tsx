"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Text from "../atoms/text";
import TrigerSidebar from "./sidebar/triger-sidebar";
import { PiNotificationBold } from "react-icons/pi";
import { usePathname, useRouter } from "next/navigation";
import { useSidebar } from "@/components/ui/sidebar";
import { ArrowLeftIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const { isMobile } = useSidebar();
  const path = usePathname();
  const router = useRouter();

  const subPath = path.split("/").slice(1).length > 1;
  const route = path.match(/[^\/]+$/) ?? "";
  const title = route[0].replace(/-/g, " ");

  return (
    <div className="bg-sidebar px-6 py-3 flex items-center justify-between select-none border-b border-sidebar-border">
      <div id="left" className="flex items-center gap-4">
        <TrigerSidebar />
        <div
          className={cn(" flex items-center gap-5", isMobile ? "ps-10" : "")}
        >
          {subPath && (
            <ArrowLeftIcon
              size={24}
              className="w-6 h-6 cursor-pointer text-2xl"
              onClick={() => router.back()}
            />
          )}
          <Text variant="h2" className="select-none capitalize">
            {title}
          </Text>
        </div>
      </div>
      <div id="right" className="flex items-center gap-4">
        <Button
          variant={"ghost"}
          size={"icon"}
          className="rounded-full max-sm:text-xs"
        >
          <PiNotificationBold />
        </Button>
        <div className="flex items-center gap-4">
          <div id="platform" className="flex flex-col gap-0 text-right w-full">
            <Text
              variant="h5"
              className="p-0 text-stone-900 dark:text-white leading-5 max-sm:text-base"
            >
              Wahyu Tricahyo
            </Text>
            <Text
              variant="span"
              className="text-stone-500 dark:text-white max-sm:text-xs"
            >
              Administrator
            </Text>
          </div>
          <Avatar className="border-2 border-accent size-9">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>WT</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
