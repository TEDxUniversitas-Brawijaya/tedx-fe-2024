"use client";

import SearchBar from "@/components/admin/shared/search-bar";
import TicketTable from "@/components/admin/ticket/ticket-table";
import { Button } from "@/components/shared/button";
import useQueryTickets from "@/repository/client/admin/tickets/useQueryTickets";
import { useQueryClient } from "@tanstack/react-query";
import { RotateCcwIcon } from "lucide-react";
import { Suspense } from "react";

function AdminDashboardTicket() {
  const { res, handleOnSearchChange, handleResetSearch, setUrlQuery } =
    useQueryTickets();

  const queryClient = useQueryClient();

  return (
    <main className="space-y-3">
      <div className="flex gap-2">
        <SearchBar
          onChange={handleOnSearchChange}
          onResetSearch={handleResetSearch}
          placeholder="Cari Data Tiket"
        />
        <Button
          onClick={() =>
            queryClient.invalidateQueries({ queryKey: ["get-admin-tickets"] })
          }
          size={"icon"}
          variant={"outline"}
        >
          <RotateCcwIcon />
        </Button>
      </div>
      <TicketTable result={res} onPageChange={setUrlQuery} />
    </main>
  );
}

export default function AdminDashboardTicketPage() {
  return (
    <Suspense>
      <AdminDashboardTicket />
    </Suspense>
  );
}
