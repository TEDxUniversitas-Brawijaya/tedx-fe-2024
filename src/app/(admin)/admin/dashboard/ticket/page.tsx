"use client";

import TablePagination from "@/components/admin/shared/pagination";
import SearchBar from "@/components/admin/shared/search-bar";
import { Button } from "@/components/shared/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shared/table";
import { CheckCircleIcon, RotateCcwIcon } from "lucide-react";

export default function AdminDashboardTicketPage() {
  return (
    <main className="space-y-3">
      <div className="flex gap-2">
        <SearchBar
          onChange={() => {}}
          onResetSearch={() => {}}
          placeholder="Cari Data Tiket"
        />
        <Button size={"icon"} variant={"outline"}>
          <RotateCcwIcon />
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID Tiket</TableHead>
            <TableHead>ID Transaksi</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status Check-in</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(10)].map((_, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">PRO0213</TableCell>
              <TableCell>PRO0213</TableCell>
              <TableCell>Johan Sutardjo</TableCell>
              <TableCell>Propaganda 3</TableCell>
              <TableCell>example@mail.com</TableCell>
              <TableCell>
                <CheckCircleIcon className="text-emerald-500" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6}>
              <div className="flex items-center justify-end">
                <TablePagination
                  current_page={1}
                  next_page={2}
                  previous_page={null}
                  total_data={10}
                  total_page={5}
                  onPageChange={() => {}}
                />
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </main>
  );
}
