"use client";

import ApprovalStatusChip from "@/components/admin/shared/approval-status-chip";
import TablePagination from "@/components/admin/shared/pagination";
import ProofImageModal from "@/components/admin/shared/proof-image-modal";
import SearchBar from "@/components/admin/shared/search-bar";
import { Button } from "@/components/shared/button";
import XIcon from "@/components/shared/icons/x-icon";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shared/table";
import { CheckIcon } from "lucide-react";

export default function AdminDashboardTransactionPage() {
  return (
    <main className="space-y-3">
      <div>
        <SearchBar
          onChange={() => {}}
          onResetSearch={() => {}}
          placeholder="Cari Data Transaksi"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID Transaksi</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>No. Telepon</TableHead>
            <TableHead>Instansi</TableHead>
            <TableHead>Jenis</TableHead>
            <TableHead>Jumlah</TableHead>
            <TableHead>Total Harga</TableHead>
            <TableHead>Approval</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(10)].map((_, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">PRO0213</TableCell>
              <TableCell>example@mail.com</TableCell>
              <TableCell>
                <ApprovalStatusChip status="approved" />
              </TableCell>
              <TableCell>Johan Sutardjo</TableCell>
              <TableCell>081377471625</TableCell>
              <TableCell>Universitas Brawijaya</TableCell>
              <TableCell>Presale Propaganda 3</TableCell>
              <TableCell>5</TableCell>
              <TableCell>Rp 130.000</TableCell>
              <TableCell className="flex gap-1">
                <ProofImageModal />
                <Button
                  size={"icon"}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  <CheckIcon />
                </Button>
                <Button size={"icon"} className="bg-rose-600 hover:bg-rose-700">
                  <XIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={11}>
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
