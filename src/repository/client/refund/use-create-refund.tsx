import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { ICreateTicketRefundPayload } from "@/types/refund-types";
import { createTicketRefund } from "@/repository/actions/refund-service";

export const useCreateTicketRefund = () => {
  const { toast } = useToast();

  return useMutation({
    mutationKey: ["refund-ticket"],
    mutationFn: async (payload: ICreateTicketRefundPayload) => {
      try {
        const response = await createTicketRefund(payload);
        return response;
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
        throw new Error("An unexpected error occurred");
      }
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error.message || "Gagal mengajukan refund, silahkan cobe kembali",
      });
    },
  });
};
