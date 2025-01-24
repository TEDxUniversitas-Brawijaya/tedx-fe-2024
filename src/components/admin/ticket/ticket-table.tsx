import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shared/table";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import TablePagination from "../shared/pagination";
import { UseQueryResult } from "@tanstack/react-query";
import { IGetTicketResponse } from "@/types/ticket-types";
import { IGeneralFilter } from "@/types/general-types";
import { formatToRupiah } from "@/lib/helpers/formatToRupiah";

export default function TicketTable({
  result,
  onPageChange,
}: {
  result: UseQueryResult<IGetTicketResponse, Error>;
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

  const { tickets, pagination } = data;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID Tiket</TableHead>
          <TableHead>ID Transaksi</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>Event</TableHead>
          <TableHead>Tipe</TableHead>
          <TableHead>Harga</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status Check-in</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tickets?.length === 0 && (
          <TableRow>
            <TableCell colSpan={11} className="italic text-neutral-400">
              <div className="flex w-full justify-center">Tidak ada data</div>
            </TableCell>
          </TableRow>
        )}
        {tickets?.map(
          (
            { number, orderID, name, event, email, isCheckedIn, type, price },
            index,
          ) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{number}</TableCell>
              <TableCell className="line-clamp-1 max-w-[100px] -translate-y-3 font-medium">
                {orderID}
              </TableCell>
              <TableCell>{name}</TableCell>
              <TableCell className="capitalize">
                {event.replaceAll("-", " ")}
              </TableCell>
              <TableCell className="capitalize">
                {type.replaceAll("-", " ")}
              </TableCell>
              <TableCell>{formatToRupiah(price)}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>
                {isCheckedIn ? (
                  <CheckCircleIcon className="text-emerald-500" />
                ) : (
                  <XCircleIcon className="text-rose-500" />
                )}
              </TableCell>
            </TableRow>
          ),
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={8}>
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
