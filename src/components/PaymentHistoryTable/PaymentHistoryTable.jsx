import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import {
  DeleteSvg,
  DownloadSvg,
  MoreHorizontalSvg,
  PrintSvg,
} from "../SvgContainer/SvgConainer";

export const columns = [
  {
    id: "select",
    cell: ({ row, table }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          table.getRowModel().rows.forEach((r) => {
            if (r.id !== row.id) {
              r.toggleSelected(false);
            }
          });

          row.toggleSelected(!!value);
          setCheckedData(value ? row.original : null);
        }}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "invoiceId",
    header: () => (
      <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base">
        Invoice ID
      </span>
    ),
    cell: ({ row }) => (
      <div className="text-buttonColor w-[100px]">
        {row.getValue("invoiceId")}
      </div>
    ),
  },
  {
    accessorKey: "invoiceDate",
    header: () => (
      <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base w-[100px]">
        Invoice Date
      </span>
    ),
    cell: ({ row }) => (
      <div className="text-navbarColor text-xs xxs:text-base w-[100px] py-5">
        {row.getValue("invoiceDate")}
      </div>
    ),
  },
  {
    accessorKey: "product",
    header: () => (
      <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base">
        Product
      </span>
    ),
    cell: ({ row }) => (
      <div className="capitalize text-navbarColor text-xs xxs:text-base w-[200px]">
        {row.getValue("product")}
      </div>
    ),
  },
  {
    accessorKey: "quantity",
    header: () => (
      <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base">
        Quantity
      </span>
    ),
    cell: ({ row }) => (
      <div className="text-navbarColor text-xs xxs:text-base w-[100px]">
        {row.getValue("quantity")}
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => (
      <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base w-[100px]">
        Amount
      </span>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return (
        <div className="text-navbarColor text-xs xxs:text-base w-[100px]">
          {formatted}
        </div>
      );
    },
  },
  {
    accessorKey: "paymentMethod",
    header: () => (
      <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base">
        Payment Method
      </span>
    ),
    cell: ({ row }) => (
      <div className="text-navbarColor text-xs xxs:text-base w-[200px]">
        {row.getValue("paymentMethod")}
      </div>
    ),
  },
  {
    accessorKey: "datePaid",
    header: () => (
      <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base">
        Date Paid
      </span>
    ),
    cell: ({ row }) => (
      <div className="text-navbarColor text-xs xxs:text-base w-[100px]">
        {row.getValue("datePaid")}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: () => (
      <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base">
        Status
      </span>
    ),
    cell: ({ row }) => (
      <div className="font-publicSans text-[#005CE8] font-medium bg-[#F0F6FF] text-center py-[5px] px-4 rounded-[130px] w-[100px]">
        {row.getValue("status")}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const invoice = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 bg-[#F0F0F0] rounded-[200px]"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontalSvg />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="text-navbarColor"
              onClick={() => navigator.clipboard.writeText(invoice.invoiceId)}
            >
              <DownloadSvg className="mr-2" />
              Download
            </DropdownMenuItem>
            <DropdownMenuItem className="text-navbarColor">
              <PrintSvg className="mr-2" />
              Print
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[#E84646]">
              <DeleteSvg className="mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const PaymentHistoryTable = ({ data }) => {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  return (
    <div className="">
      <div className="rounded-md">
        <Table className="min-w-full w-full table-auto">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-left px-4 py-2">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody className="">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className=""
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-left ">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PaymentHistoryTable;
