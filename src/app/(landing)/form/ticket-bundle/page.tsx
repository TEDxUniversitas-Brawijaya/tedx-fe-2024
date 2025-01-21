import ClientFormTicketBundlePage from "@/components/form/ticket-bundle/page/client-page";
import { getAllTicketInfo } from "@/repository/actions/ticket-service";
import { TicketEventEnum } from "@/types/ticket-types";
import { notFound } from "next/navigation";

export default async function FormTicketPage({
  searchParams,
}: {
  searchParams: {
    event: TicketEventEnum;
    bundle: "1" | "2" | "3";
  };
}) {
  const data = await getAllTicketInfo();

  console.log(data.ticketInformations);

  // TODO: UNCOMMENT ONCE ATLEAST ONE TICKET IS ACTIVE (sorry tpi saya cape bikin dummy data)
  // const getTicketsByEvent = (orderType: TicketEventEnum) => {
  //   switch (orderType) {
  //     case 'main-event':
  //       return data.ticketInformations.mainEvent;
  //     case 'propa-3-day1':
  //       return data.ticketInformations.propaganda3;
  //     case 'propa-3-day2':
  //       return data.ticketInformations.propaganda3;
  //     case 'propa-3-day3':
  //       return data.ticketInformations.propaganda3;
  //     default:
  //       return []
  //   }
  // };

  // const eventTickets = getTicketsByEvent(searchParams.event)
  //   .filter(ticket => !ticket.isExpired);

  // const activeTicket = eventTickets.length > 0 ? eventTickets[0] : undefined;

  // if (!activeTicket) {
  //   notFound();
  // }

  const isMerchAvailable = searchParams.bundle != "1";

  return (
    <ClientFormTicketBundlePage
      event={searchParams.event}
      isMerchAvailable={isMerchAvailable}
    />
  );
}
