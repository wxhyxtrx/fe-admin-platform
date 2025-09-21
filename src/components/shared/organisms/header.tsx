import React from "react";
import SettingsThemes from "../molecules/settings-themes";
import Image from "next/image";
import Text from "../atoms/text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <div className="bg-white px-6 py-3 flex items-center justify-between select-none">
      <div id="left" className="flex items-center gap-4">
        <SettingsThemes
          icons="setting"
          className="static rounded-md"
          variant="default"
        />
        <div className="flex items-center gap-4">
          <Image src="globe.svg" alt="logo" width={30} height={30} />
          <div id="platform" className="flex flex-col gap-0">
            <Text variant="h5" className="p-0 text-stone-900 leading-5">
              Hoppas Dashboard
            </Text>
            <Text variant="span" className="text-stone-500">
              Admin Panel Reference
            </Text>
          </div>
        </div>
      </div>
      <div id="right" className="flex items-center gap-4">
        <Input placeholder="Search" className="h-9 w-xs dark:bg-transparent dark:placeholder:text-stone-500 rounded-4xl dark:text-stone-800" />
        <Button size={"sm"} className="rounded-4xl">New User</Button>
        <div className="flex items-center gap-4">
          <div id="platform" className="flex flex-col gap-0 text-right w-full">
            <Text variant="h5" className="p-0 text-stone-900 leading-5">
              Stefanus Deo
            </Text>
            <Text variant="span" className="text-stone-500">
              Project Manager
            </Text>
          </div>
          <Avatar className="border-2 border-accent-foreground size-9">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
