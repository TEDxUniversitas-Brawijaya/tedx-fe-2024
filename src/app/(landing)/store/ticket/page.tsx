import ClientTicketPage from "@/components/store/ticket/page/client-page";
import { getAllTicketInfo } from "@/repository/actions/ticket-service";

export default async function TicketPage() {
  const data = await getAllTicketInfo();

  return <ClientTicketPage data={data} />;
}
