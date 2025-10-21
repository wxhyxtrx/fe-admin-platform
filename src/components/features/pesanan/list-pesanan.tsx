"use client";
import PaginationInfo from "@/components/shared/atoms/Table/TableInfo";
import TablePagination from "@/components/shared/atoms/Table/TablePagination";
import Tables from "@/components/shared/atoms/Table/Tables";
import { SearchInputGroup } from "@/components/shared/molecules/inputSearch";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import React, { useState } from "react";
import { AiOutlineExport } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
const options = [{ value: "all", label: "All" }];

type TListOrder = {
  id: string;
  name: string;
  location: string;
  pesanan: string;
  jumlah: number;
  createdAt: string;
  type: string;
};

export default function ListPesanan() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const columnsListOrder: Column<TListOrder>[] = [
    {
      label: "Id Pesanan",
      renderCell: ({ id }) => <p>{id}</p>,
      className: "",
    },
    {
      label: "Nama Pelanggan",
      renderCell: ({ name }) => (
        <p className="flex items-center gap-2">{name}</p>
      ),
      className: "",
    },
    {
      label: "Alamat",
      renderCell: ({ location }) => <p>{location}</p>,
      className: "",
    },
    {
      label: "Pesanan",
      renderCell: ({ pesanan }) => <p>{pesanan}</p>,
      className: "",
    },
    {
      label: "Jumlah",
      renderCell: ({ jumlah }) => <p>{formatCurrency(jumlah)}</p>,
      className: "",
    },
    {
      label: "Tanggal",
      renderCell: ({ createdAt }) => <p>{createdAt}</p>,
      className: "",
    },
    {
      label: "Type",
      renderCell: ({ type }) => <p className="text-center">{type}</p>,
      className: "",
    },
  ];
  return (
    <div>
      <div className="bg-background p-4 flex justify-between items-center gap-10">
        <SearchInputGroup placeholder="Cari pesanan" options={options} />
        <div className="flex items-center gap-2">
          <Button variant={"outline"}>
            <BsFilter />
            Filter
          </Button>
          <Button variant={"outline"}>
            <AiOutlineExport /> Export
          </Button>
        </div>
      </div>
      <div className="p-4 py-8">
        <Tables columns={columnsListOrder} data={[]} />
      </div>
      <div className="bg-background p-4 flex justify-between items-center gap-10">
        <PaginationInfo
          displayed={limit}
          total={100}
          onChangeDisplayed={setLimit}
          className="w-auto"
        />
        <TablePagination
          {...{ limit, page }}
          onPageChange={setPage}
          totalItems={100}
        />
      </div>
    </div>
  );
}
