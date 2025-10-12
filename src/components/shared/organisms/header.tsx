"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Text from "../atoms/text";
import TrigerSidebar from "../molecules/sidebar/triger-sidebar";

export default function Header() {
  return (
    <div className="bg-sidebar px-6 py-3 flex items-center justify-between select-none border-b border-sidebar-border">
      <div id="left" className="flex items-center gap-4">
        <TrigerSidebar/>
      </div>
      <div id="right" className="flex items-center gap-4">
        <Input
          placeholder="Search Features"
          className="h-9 w-xs dark:bg-transparent dark:placeholder:text-stone-200 rounded-4xl dark:text-stone-100 dark:border-stone-200 max-sm:hidden"
        />
        <Button size={"sm"} className="rounded-4xl max-sm:text-xs">
          New User
        </Button>
        <div className="flex items-center gap-4">
          <div id="platform" className="flex flex-col gap-0 text-right w-full">
            <Text
              variant="h5"
              className="p-0 text-stone-900 dark:text-white leading-5 max-sm:text-base"
            >
              Wahyu Tricahyo
            </Text>
            <Text variant="span" className="text-stone-500 dark:text-white max-sm:text-xs">
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
