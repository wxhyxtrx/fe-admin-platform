import React from "react";
import { TbArrowDownLeft, TbArrowUpRight } from "react-icons/tb";
import Text from "../text";
import { cn } from "@/lib/utils";

export default function PercentCalc({
  value = 0,
  variant,
}: {
  variant: "up" | "down";
  value?: number | string;
}) {
  return (
    <Text
      variant="span"
      className={cn(
        "text-sm text-gray-500 flex items-center gap-0.5",
        variant === "up" && "text-green-600",
        variant === "down" && "text-red-600"
      )}
    >
      {value}%{variant === "up" && <TbArrowUpRight />}
      {variant === "down" && <TbArrowDownLeft />}
    </Text>
  );
}
