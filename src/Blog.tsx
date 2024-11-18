// TODO: tracing beam from aceternity
// TODO: Pagination??
// TODO: icon for sharing
import {
    // CaretSortIcon,
    // ChevronDownIcon,
    DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Button } from "./components/ui/button" //@
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    // DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./components/ui/dropdown-menu" //@
import { Input } from "./components/ui/input" //@
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./components/ui/table" // @
import { ThemeProvider } from "./components/theme-provider" // @

import * as React from "react"
import './App.css'
// import table from '@/components/table.tsx'
import Navbar from './Navbar.tsx'



const data: Blog[] = [
    {
        id: 1,
        name: "Batch Normalization",
        date: "2020-01-02",
        tags: "TAG1|TAG2",
    },
    {
        id: 2,
        name: "Diffusion Models",
        date: "2020-01-02",
        tags: "TAG0|TAG1|TAG2",
    },
    {
        id: 3,
        name: "Deep Residual Neural Networks",
        date: "2020-01-02",
        tags: "TAG1|TAG2",
    },
    {
        id: 4,
        name: "Convolutional Neural Networks",
        date: "2020-01-02",
        tags: "TAG1",
    },
    {
        id: 5,
        name: "PyTorch",
        date: "2020-01-02",
        tags: "TAG1|TAG2|TAG3",
    },
]

export type Blog = {
    id: number
    name: string
    date: string
    tags: string
}

export const columns: ColumnDef<Blog>[] = [

    {
        accessorKey: "name",
        header: () => <div className="text-center">Name</div>,
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("name")}</div>
        ),
    },
    {
        accessorKey: "tags",
        header: () => <div className="text-center">Tags</div>,
        cell: ({ row }) => (
            <div className="lowercase">{row.getValue("name")/*.replaceAll('|', ' ')*/}</div>
        ),
    },
    {
        accessorKey: "date",
        header: () => <div className="text-center">Date</div>,
        cell: ({ row }) => {
            return <div className="text-center font-medium">{row.getValue("date")}</div>
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: (/*{ row }*/) => {
            // const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <DotsHorizontalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Share</DropdownMenuLabel>
                        <DropdownMenuItem>Email</DropdownMenuItem>
                        <DropdownMenuItem>Telegram</DropdownMenuItem>
                        <DropdownMenuItem>X</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]


function App() {

    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

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
    })

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

            <div className="w-full">
                <div className="flex items-center py-4">
                    <Input
                        placeholder="Filter tags..."
                        value={(table.getColumn("tags")?.getFilterValue() as string) ?? ""}
                        onChange={(event) => {
                            table.getColumn("tags")?.setFilterValue(event.target.value)
                        }
                        }
                        className="max-w-sm"
                    />
                </div>

                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
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
                <div className="flex items-center justify-end space-x-2 py-4">
                    <div className="space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App
