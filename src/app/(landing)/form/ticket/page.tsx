import ClientFormTicketPage from "@/components/form/ticket/page/client-page";
import { TicketTypeEnum } from "@/types/ticket-types";

export default async function FormTicketPage({
  searchParams,
}: {
  searchParams: { type: TicketTypeEnum };
}) {
  return <ClientFormTicketPage type={searchParams.type} />;
}
