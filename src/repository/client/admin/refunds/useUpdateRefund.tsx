import { updateTicketRefund } from "@/repository/actions/refund-service";
import { IUpdateTicketRefundPayload } from "@/types/refund-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

export default function useUpdateRefund(
  id: string,
  onOpenChange: Dispatch<SetStateAction<boolean>>,
) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: IUpdateTicketRefundPayload) => {
      return updateTicketRefund(id, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-admin-refunds"],
      });
      toast.success("Update pengajuan berhasil");
      onOpenChange(false);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (values: IUpdateTicketRefundPayload) => {
    mutate(values);
  };

  return {
    onSubmit,
    isPending,
  };
}
