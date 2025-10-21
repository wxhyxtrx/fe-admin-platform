import Text from "@/components/shared/atoms/text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { PiBoxArrowDown, PiPlusBold } from "react-icons/pi";
import { BiUserPlus } from "react-icons/bi";
import { formatCurrency } from "@/lib/utils";

export default function Balance() {
  return (
    <Card className="bg-gradient-to-br from-accent from-20% to-accent/50 rounded-2xl px-5 py-8 border-0 flex flex-row items-center justify-between">
      <div className="space-y-2 flex-1 ">
        <Text variant="p" className="capitalize font-light text-white">
          total Pendapatan
        </Text>
        <Text variant="h3" className="font-medium text-white">
          {formatCurrency(1000000)}
        </Text>
      </div>
      <div className="flex justify-center gap-2">
        <Button variant={"default"} className="">
          <PiPlusBold /> Tambah
        </Button>
        <Button variant={"outline"} className=" border-0">
          <BiUserPlus /> Pelanggan Baru
        </Button>
        <Button variant={"outline"} className=" border-0">
          <PiBoxArrowDown /> Tambah Barang
        </Button>
      </div>
    </Card>
  );
}
