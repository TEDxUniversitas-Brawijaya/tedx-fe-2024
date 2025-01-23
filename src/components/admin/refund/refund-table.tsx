import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shared/table";
import { IGeneralFilter } from "@/types/general-types";
import { IGetTicketRefundsResponse } from "@/types/refund-types";
import { UseQueryResult } from "@tanstack/react-query";
import ApprovalStatusChip from "../shared/approval-status-chip";
import TablePagination from "../shared/pagination";
import ProofImageModal from "../shared/proof-image-modal";
import AcceptRefundModal from "./accept-refund-modal";
import RejectRefundModal from "./reject-refund-modal";

export default function RefundTable({
  result,
  onPageChange,
}: {
  result: UseQueryResult<IGetTicketRefundsResponse, Error>;
  onPageChange: React.Dispatch<React.SetStateAction<IGeneralFilter>>;
}) {
  const { data, error, isLoading } = result;

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
                {status === "pending" && (
                  <>
                    <AcceptRefundModal id={id} email={requesterEmail} />
                    <RejectRefundModal id={id} email={requesterEmail} />
                  </>
                )}
              </TableCell>
            </TableRow>
          ),
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={10}>
            <TablePagination
              current_page={pagination?.current || 1}
              next_page={pagination?.next}
              previous_page={pagination?.prev}
              total_data={pagination?.totalData || 0}
              total_page={pagination?.totalPage || 0}
              onPageChange={onPageChange}
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
