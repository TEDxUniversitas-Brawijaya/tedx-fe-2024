import ApprovalStatusChip from "@/components/admin/shared/approval-status-chip";
import TablePagination from "@/components/admin/shared/pagination";
import ProofImageModal from "@/components/admin/shared/proof-image-modal";
import AcceptTransactionModal from "@/components/admin/transaction/accept-transaction-modal";
import RejectTransactionModal from "@/components/admin/transaction/reject-transaction-modal";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shared/table";
import { formatToRupiah } from "@/lib/helpers/formatToRupiah";
import { IGetOrdersResponse } from "@/types/order-types";
import { UseQueryResult } from "@tanstack/react-query";

export default function TransactionTable({
  result,
}: {
  result: UseQueryResult<IGetOrdersResponse, Error>;
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

  const { orders, pagination } = data;

  return (
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
        {orders?.length === 0 && (
          <TableRow>
            <TableCell colSpan={11} className="italic text-neutral-400">
              <div className="flex w-full justify-center">Tidak ada data</div>
            </TableCell>
          </TableRow>
        )}

        {orders?.map(
          (
            {
              id,
              email,
              institution,
              name,
              phone,
              quantity,
              status,
              totalPrice,
              type,
              paymentProof,
            },
            index,
          ) => (
            <TableRow key={index}>
              <TableCell className="line-clamp-1 max-w-[100px] -translate-y-3 font-medium">
                {id}
              </TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>
                <ApprovalStatusChip status={status} />
              </TableCell>
              <TableCell className="min-w-[150px]">{name}</TableCell>
              <TableCell>{phone}</TableCell>
              <TableCell>{institution}</TableCell>
              <TableCell className="capitalize">
                {type.replaceAll("-", " ")}
              </TableCell>
              <TableCell>{quantity}</TableCell>
              <TableCell>{formatToRupiah(totalPrice)}</TableCell>
              <TableCell className="flex gap-1">
                <ProofImageModal url={paymentProof} name={name} type={type} />
                {status === "pending" && (
                  <>
                    <AcceptTransactionModal id={id} email={email} />
                    <RejectTransactionModal id={id} email={email} />
                  </>
                )}
              </TableCell>
            </TableRow>
          ),
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={11}>
            <TablePagination
              current_page={pagination?.current || 1}
              next_page={pagination?.next}
              previous_page={pagination?.prev}
              total_data={pagination?.totalData || 0}
              total_page={pagination?.totalPage || 0}
              onPageChange={() => {}}
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
