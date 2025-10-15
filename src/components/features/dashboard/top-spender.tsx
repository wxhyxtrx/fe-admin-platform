import Tables from "@/components/shared/atoms/Table/Tables";
import Text from "@/components/shared/atoms/text";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import React from "react";
import { BiFilter, BiSort } from "react-icons/bi";
import { MdStars } from "react-icons/md";

type TTopSpender = {
  name: string;
  avgSpent: number;
  totalSpent: number;
  totalOrder: number;
  location: string;
  lastOrderAt: string;
};

const dataSpender = [
  {
    name: "Andi Wijaya",
    avgSpent: 1250000,
    totalSpent: 12500000,
    totalOrder: 10,
    location: "Jakarta",
    lastOrderAt: "2023-12-15",
  },
  {
    name: "Siti Rahma",
    avgSpent: 980000,
    totalSpent: 8820000,
    totalOrder: 9,
    location: "Bandung",
    lastOrderAt: "2023-12-15",
  },
  {
    name: "Budi Santoso",
    avgSpent: 1575000,
    totalSpent: 11025000,
    totalOrder: 7,
    location: "Surabaya",
    lastOrderAt: "2023-12-15",
  },
  {
    name: "Maria Elisabeth",
    avgSpent: 1420000,
    totalSpent: 11360000,
    totalOrder: 8,
    location: "Medan",
    lastOrderAt: "2023-12-15",
  },
  {
    name: "Rizky Pratama",
    avgSpent: 870000,
    totalSpent: 7830000,
    totalOrder: 9,
    location: "Yogyakarta",
    lastOrderAt: "2023-12-15",
  },
];

export default function TopSpender() {
  function getTop1Spender(data: TTopSpender[]): TTopSpender | null {
    if (!data.length) return null;

    const sorted = [...data].sort((a, b) => {
      if (b.totalSpent !== a.totalSpent) return b.totalSpent - a.totalSpent; // Prioritas utama
      if (b.totalOrder !== a.totalOrder) return b.totalOrder - a.totalOrder; // Kedua
      if (b.avgSpent !== a.avgSpent) return b.avgSpent - a.avgSpent; // Ketiga
      return 0;
    });

    return sorted[0];
  }
  const top1Spender = getTop1Spender(dataSpender);

  const columnTopSpender: Column<TTopSpender>[] = [
    {
      label: "No",
      renderCell: () => null,
      className: "",
    },
    {
      label: "Cust Name",
      renderCell: ({ name }) => <p className="flex items-center gap-2">{top1Spender?.name === name && <MdStars className="text-yellow-600 text-lg"/>} {name} </p>,
      className: "",
    },
    {
      label: "Avg Spent",
      renderCell: ({ avgSpent }) => <p>{formatCurrency(avgSpent)}</p>,
      className: "",
    },
    {
      label: "Total Spent",
      renderCell: ({ totalSpent }) => <p>{formatCurrency(totalSpent)}</p>,
      className: "",
    },
    {
      label: "Total Order",
      renderCell: ({ totalOrder }) => <p>{totalOrder}</p>,
      className: "",
    },
    {
      label: "Address",
      renderCell: ({ location }) => <p>{location}</p>,
      className: "",
    },
    {
      label: "Last Order",
      renderCell: ({ lastOrderAt }) => <p>{lastOrderAt}</p>,
      className: "",
    },
  ];
  return (
    <Card>
      <CardHeader className="flex justify-between gap-5 items-center">
        <Text>Best of 5 Spender</Text>
        <div className="space-x-2.5">
          <Button size={"sm"} variant={"secondary"} className="font-medium">
            <BiFilter /> Filter
          </Button>
          <Button size={"sm"} variant={"secondary"} className="font-medium">
            <BiSort /> Sort
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tables data={dataSpender} columns={columnTopSpender} />
      </CardContent>
    </Card>
  );
}
