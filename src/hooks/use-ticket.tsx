import { useMemo } from "react";
import {
  ITicketInformation,
  ITicketInfoDetail,
  IBundlingTicket,
  IBundlingTickets,
} from "@/types/ticket-types";

export const useTickets = (ticketInfo: ITicketInformation) => {
  return useMemo(() => {
    const filterValidTickets = (tickets: ITicketInfoDetail[]) =>
      tickets.filter((ticket) => !ticket.isExpired);

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

    const createBundlingTickets = (
      bundlingTickets: ITicketInfoDetail[],
      bundleNumber: number,
    ): IBundlingTicket | null => {
      if (!bundlingTickets) return null;

      const propagandaDays = {
        day1:
          filterValidTickets(
            bundlingTickets.filter(
              (t) => t.name.includes("Day 1") && t.type === "Early Bird",
            ),
          )[0] || null,
        day2:
          filterValidTickets(
            bundlingTickets.filter(
              (t) => t.name.includes("Day 2") && t.type === "Early Bird",
            ),
          )[0] || null,
        day3:
          filterValidTickets(
            bundlingTickets.filter(
              (t) => t.name.includes("Day 3") && t.type === "Early Bird",
            ),
          )[0] || null,
      };

      const hasValidTickets = Object.values(propagandaDays).some(
        (ticket) => ticket !== null,
      );
      if (!hasValidTickets) return null;

      return {
        propagandaDays,
        bundleNumber,
      };
    };

    const bundlingTickets: IBundlingTickets = {
      bundle1: createBundlingTickets(ticketInfo.ticketBundling1, 1),
      bundle2: createBundlingTickets(ticketInfo.ticketBundling2, 2),
      bundle3: createBundlingTickets(ticketInfo.ticketBundling3, 3),
    };

    return {
      regularTickets,
      bundlingTickets,
    };
  }, [ticketInfo]);
};
