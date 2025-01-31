import { getAllTicketDiscounts } from "@/repository/actions/order-service";
import { useQuery } from "@tanstack/react-query";

export default function useQueryTicketDiscounts() {
  const res = useQuery({
    queryKey: ["get-ticket-discounts"],
    queryFn: () => getAllTicketDiscounts(),
    placeholderData: (prev) => prev,
    refetchOnWindowFocus: false,
  });

  return res;
}
