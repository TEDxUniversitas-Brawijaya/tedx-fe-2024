import ClientFormTicketPage from "@/components/form/ticket/page/client-page";
import { getAllTicketInfo } from "@/repository/actions/ticket-service";
import { TicketEventEnum } from "@/types/ticket-types";
import { notFound } from "next/navigation";

export default async function FormTicketPage({
  searchParams,
}: {
  searchParams: { event: TicketEventEnum };
}) {
  const data = await getAllTicketInfo();

  const getTicketsByEvent = (eventType: TicketEventEnum) => {
    switch (eventType) {
      case "main-event":
        return data.ticketInformations.mainEvent;
      case "propa-3-day1":
        return data.ticketInformations.propaganda3.filter(({ name }) =>
          name.includes("Day 1"),
        );
      case "propa-3-day2":
        return data.ticketInformations.propaganda3.filter(({ name }) =>
          name.includes("Day 2"),
        );
      case "propa-3-day3":
        return data.ticketInformations.propaganda3.filter(({ name }) =>
          name.includes("Day 3"),
        );
      default:
        return [];
    }
  };

  const eventTickets = getTicketsByEvent(searchParams.event).filter(
    (ticket) => !ticket.isExpired,
  );

  const activeTicket = eventTickets.length > 0 ? eventTickets[0] : undefined;

  if (!activeTicket) {
    notFound();
  }

  return (
    <ClientFormTicketPage event={searchParams.event} ticket={activeTicket} />
  );
}
