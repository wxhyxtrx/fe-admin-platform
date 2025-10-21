import React from "react";
import { cn } from "@/lib/utils";
import { CiFolderOff } from "react-icons/ci";
import Text from "../text";
const Tables = <T,>({
  columns,
  data,
  className,
  currentPage: page = 1,
  itemsPerPage: limit = 10,
}: TableProps<T>) => {
  return (
    <div className="overflow-x-auto scrollbar">
      <table className={cn("w-full table-auto border-collapse", className)}>
        {/* Header */}
        <thead className="">
          <tr className="bg-slate-100 dark:bg-accent select-none">
            {columns.map((column, index) => (
              <td
                key={index}
                className={cn(
                  column.className,
                  "font-medium py-3.5 first:ps-7 last:pe-7 px-2 text-xs sm:text-sm first:rounded-l-md last:rounded-r-md text-slate-400 dark:text-white"
                )}
              >
                {index === 1 ? column.label : column.label}
              </td>
            ))}
          </tr>
        </thead>
        {/* Body */}
        <tbody>
          {data?.length > 0 ? (
            data.map((row, rowIndex) => {
              return (
                <tr
                  key={rowIndex}
                  className=" hover:bg-background/50 hover:rounded-lg w-fit"
                >
                  {columns.map((column, colIndex) => {
                    return (
                      <td
                        key={colIndex}
                        className={cn(
                          column.className,
                          "py-3.5 first:ps-7 first:rounded-l-lg last:rounded-r-lg last:pe-7 px-2 text-xs sm:text-sm font-normal text-neutral-800 dark:text-white"
                        )}
                      >
                        {column.label === "No"
                          ? rowIndex + 1
                          : column.renderCell(row)}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className=" px-7 py-3.5 text-xs sm:text-sm font-normal h-80"
              >
                <div className=" text-center space-y-2">
                  <CiFolderOff className="inline-block size-14 text-neutral-800 dark:text-white" />
                  <Text className="text-sm font-normal text-neutral-800 dark:text-white">
                    Data Tidak Ditemukan
                  </Text>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
