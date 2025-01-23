import { updateOrder } from "@/repository/actions/order-service";
import { IUpdateOrderPayload } from "@/types/order-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

export default function useUpdateTransaction(
  id: string,
  onOpenChange: Dispatch<SetStateAction<boolean>>,
) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: IUpdateOrderPayload) => {
      return updateOrder(id, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-admin-transactions"],
      });
      toast.success("Update transaksi berhasil");
      onOpenChange(false);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (values: IUpdateOrderPayload) => {
    mutate(values);
  };

  return {
    onSubmit,
    isPending,
  };
}
