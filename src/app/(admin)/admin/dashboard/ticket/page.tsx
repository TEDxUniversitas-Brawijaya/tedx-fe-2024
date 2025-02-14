"use client";

import SearchBar from "@/components/admin/shared/search-bar";
import TicketTable from "@/components/admin/ticket/ticket-table";
import { Button } from "@/components/shared/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/select";
import useQueryTickets from "@/repository/client/admin/tickets/useQueryTickets";
import { useQueryClient } from "@tanstack/react-query";
import { RotateCcwIcon } from "lucide-react";
import { Suspense } from "react";

function AdminDashboardTicket() {
  const {
    res,
    handleOnSearchChange,
    handleStatusChange,
    handleResetSearch,
    handleEventChange,
    setUrlQuery,
    tickets,
  } = useQueryTickets();

  const queryClient = useQueryClient();

  return (
    <main className="space-y-3">
      <div className="flex gap-2">
        <SearchBar
          onChange={handleOnSearchChange}
          onResetSearch={handleResetSearch}
          placeholder="Cari Data Tiket"
        />
        <Select onValueChange={handleStatusChange} defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status Tiket" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="all">Semua Status</SelectItem>
              <SelectItem value="true">Sudah Check-in</SelectItem>
              <SelectItem value="false">Belum Check-in</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select onValueChange={handleEventChange} defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Event" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Event</SelectLabel>
              <SelectItem value="all">Semua Event</SelectItem>
              <SelectItem value="propa3-day1">Propa 3 Day 1</SelectItem>
              <SelectItem value="propa3-day2">Propa 3 Day 2</SelectItem>
              <SelectItem value="propa3-day3">Propa 3 Day 3</SelectItem>
              <SelectItem value="main-event">Main Event</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
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
      <TicketTable
        ticketData={tickets}
        result={res}
        onPageChange={setUrlQuery}
      />
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
