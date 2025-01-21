import { useMemo } from "react";
import { ITicketInformation } from "@/types/ticket-types";

export const useTickets = (ticketInfo: ITicketInformation) => {
  return useMemo(() => {
    const filterValidTickets = (tickets: any[]) =>
      tickets.filter((ticket) => ticket.isExpired);

    const regularTickets = {
      mainEventTicket: filterValidTickets(ticketInfo.mainEvent)[0] || null,
      propagandaDays: {
        day1:
          filterValidTickets(
            ticketInfo.propaganda3.filter((t) => t.name.includes("Day 1")),
          )[0] || null,
        day2:
          filterValidTickets(
            ticketInfo.propaganda3.filter((t) => t.name.includes("Day 2")),
          )[0] || null,
        day3:
          filterValidTickets(
            ticketInfo.propaganda3.filter((t) => t.name.includes("Day 3")),
          )[0] || null,
      },
    };

    const bundlingTickets = {
      mainEvent:
        filterValidTickets(
          ticketInfo.ticketBundling1.filter((t) => t.type === "Early Bird"),
        )[0] || null,
      propagandaDays: {
        day1:
          filterValidTickets(
            ticketInfo.ticketBundling1.filter(
              (t) => t.name.includes("Day 1") && t.type === "Early Bird",
            ),
          )[0] || null,
        day2:
          filterValidTickets(
            ticketInfo.ticketBundling1.filter(
              (t) => t.name.includes("Day 2") && t.type === "Early Bird",
            ),
          )[0] || null,
        day3:
          filterValidTickets(
            ticketInfo.ticketBundling1.filter(
              (t) => t.name.includes("Day 3") && t.type === "Early Bird",
            ),
          )[0] || null,
      },
    };

    return {
      regularTickets,
      bundlingTickets,
    };
  }, [ticketInfo]);
};
