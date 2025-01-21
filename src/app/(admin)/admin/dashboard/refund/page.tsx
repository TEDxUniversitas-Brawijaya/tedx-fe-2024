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
import useQueryRefunds from "@/repository/client/admin/refunds/useQueryRefunds";
import { CheckIcon } from "lucide-react";

export default function AdminDashboardRefundPage() {
  const { res, handleOnSearchChange, handleResetSearch } = useQueryRefunds();

  const { data, error, isLoading } = res;

  if (isLoading) {
    return (
      <div className="h-[86vh] w-full animate-pulse rounded-lg bg-neutral-300"></div>
    );
  }

  if (!data || error) {
    return (
      <div className="rounded-lg bg-rose-100 p-5 font-medium text-rose-600">
        {error?.message}
      </div>
    );
  }

  const { ticketRefunds, pagination } = data;

  return (
    <main className="space-y-3">
      <div>
        <SearchBar
          onChange={handleOnSearchChange}
          onResetSearch={handleResetSearch}
          placeholder="Cari Data Pengajuan"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID Transaksi</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Alasan</TableHead>
            <TableHead>Jumlah</TableHead>
            <TableHead>Metode Pembayaran</TableHead>
            <TableHead>No. Rekening</TableHead>
            <TableHead>Approval</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ticketRefunds?.length === 0 && (
            <TableRow>
              <TableCell colSpan={11} className="italic text-neutral-400">
                <div className="flex w-full justify-center">Tidak ada data</div>
              </TableCell>
            </TableRow>
          )}
          {ticketRefunds?.map(
            (
              {
                id,
                requesterEmail,
                status,
                requesterName,
                cancellationReason,
                refundedTickets,
                paymentMethod,
                paymentNumber,
                paymentProof,
                event,
              },
              index,
            ) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{id}</TableCell>
                <TableCell>{requesterEmail}</TableCell>
                <TableCell>
                  <ApprovalStatusChip status={status} />
                </TableCell>
                <TableCell>{requesterName}</TableCell>
                <TableCell>{cancellationReason}</TableCell>
                <TableCell>{refundedTickets}</TableCell>
                <TableCell>{paymentMethod}</TableCell>
                <TableCell>{paymentNumber}</TableCell>

                <TableCell className="flex gap-1">
                  <ProofImageModal
                    url={paymentProof}
                    name={requesterName}
                    type={event}
                  />
                  <Button
                    size={"icon"}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    <CheckIcon />
                  </Button>
                  <Button
                    size={"icon"}
                    className="bg-rose-600 hover:bg-rose-700"
                  >
                    <XIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={10}>
              <div className="flex items-center justify-end">
                <TablePagination
                  current_page={pagination?.current || 1}
                  next_page={pagination?.next}
                  previous_page={pagination?.prev}
                  total_data={pagination?.totalData || 0}
                  total_page={pagination?.totalPage || 0}
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
