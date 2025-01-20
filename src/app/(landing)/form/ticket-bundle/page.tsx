import ClientFormTicketBundlePage from "@/components/form/ticket-bundle/page/client-page";
import { TicketTypeEnum } from "@/types/ticket-types";

export default async function FormTicketPage({
  searchParams,
}: {
  searchParams: { type: TicketTypeEnum };
}) {
  return <ClientFormTicketBundlePage type={searchParams.type} />;
}
