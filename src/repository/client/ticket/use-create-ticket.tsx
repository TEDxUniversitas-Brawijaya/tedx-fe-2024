"use client";

import { createTicket } from "@/repository/actions/ticket-service";
import { ICreateTicketPayload } from "@/types/ticket-types";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export const useCreateTicket = () => {
  const { toast } = useToast();

  return useMutation({
    mutationKey: ["create-ticket"],
    mutationFn: async (payload: ICreateTicketPayload) => {
      try {
        const response = await createTicket(payload);
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
          error.message || "Gagal membeli tiket, silahkan coba kembali",
      });
    },
  });
};
