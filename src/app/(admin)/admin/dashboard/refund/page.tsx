"use client";

import RefundTable from "@/components/admin/refund/refund-table";
import SearchBar from "@/components/admin/shared/search-bar";
import useQueryRefunds from "@/repository/client/admin/refunds/useQueryRefunds";

export default function AdminDashboardRefundPage() {
  const { res, handleOnSearchChange, handleResetSearch, setUrlQuery } =
    useQueryRefunds();

  return (
    <main className="space-y-3">
      <div>
        <SearchBar
          onChange={handleOnSearchChange}
          onResetSearch={handleResetSearch}
          placeholder="Cari Data Pengajuan"
        />
      </div>
      <RefundTable result={res} onPageChange={setUrlQuery} />
    </main>
  );
}
