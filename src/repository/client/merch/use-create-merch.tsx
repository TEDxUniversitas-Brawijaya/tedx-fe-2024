"use client";

import { useToast } from "@/hooks/use-toast";
import { createMerchOrder } from "@/repository/actions/merch-service";
import { ICreateMerchOrderPayload } from "@/types/merch-types";
import { useMutation } from "@tanstack/react-query";

export const useCreateMerch = () => {
  const { toast } = useToast();

  return useMutation({
    mutationKey: ["create-merch"],
    mutationFn: async (payload: ICreateMerchOrderPayload) => {
      try {
        const response = await createMerchOrder(payload);
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
          error.message || "Gagal memproses transaksi, silahkan coba kembali",
      });
    },
  });
};
