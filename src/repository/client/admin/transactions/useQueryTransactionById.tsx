import { getOrderById } from "@/repository/actions/order-service";
import { useQuery } from "@tanstack/react-query";

export default function useQueryTransactionById(id: string) {
  const res = useQuery({
    queryKey: ["get-admin-transactions-detail", id],
    queryFn: () => getOrderById(id),
    refetchOnWindowFocus: false,
  });

  return res;
}
