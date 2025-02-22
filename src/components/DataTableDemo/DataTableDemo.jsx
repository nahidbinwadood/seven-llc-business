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
import { MoreHorizontal } from "lucide-react";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import { DeleteSvg, DownloadSvg, PrintSvg } from "../SvgContainer/SvgConainer";

const data = [
  {
    id: "1",
    productName: "Laptop",
    invoiceId: "inv12345",
    category: "Electronics",
    quantity: 1,
    price: 799.99,
    total: 799.99,
    imageUrl: "https://i.postimg.cc/150K8Y0m/product-Summery-Pic3.png",
  },
  {
    id: "2",
    productName: "Headphones",
    invoiceId: "inv12346",
    category: "Accessories",
    quantity: 2,
    price: 49.99,
    total: 99.98,
    imageUrl: "https://i.postimg.cc/150K8Y0m/product-Summery-Pic3.png",
  },
  {
    id: "3",
    productName: "Smartphone",
    invoiceId: "inv12347",
    category: "Electronics",
    quantity: 1,
    price: 599.99,
    total: 599.99,
    imageUrl: "https://i.postimg.cc/150K8Y0m/product-Summery-Pic3.png",
  },
  {
    id: "4",
    productName: "Mouse",
    invoiceId: "inv12348",
    category: "Accessories",
    quantity: 3,
    price: 19.99,
    total: 59.97,
    imageUrl: "https://i.postimg.cc/150K8Y0m/product-Summery-Pic3.png",
  },
  {
    id: "5",
    productName: "Keyboard",
    invoiceId: "inv12349",
    category: "Accessories",
    quantity: 1,
    price: 69.99,
    total: 69.99,
    imageUrl: "https://i.postimg.cc/150K8Y0m/product-Summery-Pic3.png",
  },
];

export function DataTableDemo({ setCheckedData }) {
  const columns = [
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
      accessorKey: "productName",
      header: () => (
        <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base">
          Product Name
        </span>
      ),
      cell: ({ row }) => {
        const productName = row.getValue("productName");

        const product = data.find((p) => p.productName === productName);

        return (
          <div className="capitalize text-headingColor text-xs xxs:text-base flex items-center pr-10 xmd:pr-0">
            {/* Conditionally render the image */}
            {product && product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={productName}
                className="w-11 h-11 mr-3 rounded"
              />
            ) : (
              <div className="w-8 h-8 mr-2 rounded bg-gray-300" />
            )}
            {productName}
          </div>
        );
      },
    },
    {
      accessorKey: "invoiceId",
      header: () => (
        <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base w-[100px]">
          Invoice ID
        </span>
      ),
      cell: ({ row }) => (
        <div className="text-buttonColor text-xs xxs:text-base w-[100px]">
          {row.getValue("invoiceId")}
        </div>
      ),
    },
    {
      accessorKey: "category",
      header: () => (
        <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base">
          Category
        </span>
      ),
      cell: ({ row }) => (
        <div className="capitalize text-navbarColor text-xs xxs:text-base">
          {row.getValue("category")}
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
        <div className="text-navbarColor text-xs xxs:text-base">
          {row.getValue("quantity")}
        </div>
      ),
    },
    {
      accessorKey: "price",
      header: () => (
        <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base">
          Price
        </span>
      ),
      cell: ({ row }) => {
        const price = parseFloat(row.getValue("price"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price);
        return (
          <div className="text-navbarColor text-xs xxs:text-base">
            {formatted}
          </div>
        );
      },
    },
    {
      accessorKey: "total",
      header: () => (
        <span className="font-lato text-headingColor font-semibold text-xs xxs:text-base">
          Total
        </span>
      ),
      cell: ({ row }) => {
        const total = parseFloat(row.getValue("total"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(total);
        return (
          <div className="text-navbarColor text-xs xxs:text-base">
            {formatted}
          </div>
        );
      },
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
                <MoreHorizontal />
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
          <TableBody className="bg-[#FFF]">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className=""
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="p-2 md:p-4 text-left">
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
}
