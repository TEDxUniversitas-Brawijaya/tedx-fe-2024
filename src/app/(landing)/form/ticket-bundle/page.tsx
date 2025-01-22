import ClientFormTicketBundlePage from "@/components/form/ticket-bundle/page/client-page";
import { getActiveTicketBundle } from "@/lib/ticket";
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

  const activeTicket = getActiveTicketBundle(
    data.ticketInformations,
    searchParams.event,
    searchParams.bundle,
  );

  if (!activeTicket) {
    notFound();
  }

  const isMerchAvailable = searchParams.bundle != "1";

  return (
    <ClientFormTicketBundlePage
      event={searchParams.event}
      ticket={activeTicket}
      isMerchAvailable={isMerchAvailable}
    />
  );
}
