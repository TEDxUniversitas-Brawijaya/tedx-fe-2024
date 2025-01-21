"use client";

import SearchBar from "@/components/admin/shared/search-bar";
import TransactionTable from "@/components/admin/transaction/transaction-table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/select";
import useQueryTransactions from "@/repository/client/admin/transactions/useQueryTransactions";

export default function AdminDashboardTransactionPage() {
  const { res, handleOnSearchChange, handleResetSearch, handleStatusChange } =
    useQueryTransactions();

  return (
    <main className="space-y-3">
      <div className="flex items-center gap-2">
        <SearchBar
          onChange={handleOnSearchChange}
          onResetSearch={handleResetSearch}
          placeholder="Cari Data Transaksi"
        />
        <Select onValueChange={handleStatusChange} defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status Transaksi" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="all">Semua Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="accepted">Accepted</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <TransactionTable result={res} />
    </main>
  );
}
