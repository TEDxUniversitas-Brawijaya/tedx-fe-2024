import { checkIn } from "@/repository/actions/ticket-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IDetectedBarcode } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useCheckIn() {
  const queryClient = useQueryClient();

  const [ticketId, setTicketId] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean>(false);

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: string) => {
      return checkIn(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-admin-tickets"],
      });
      toast.success("Check-in berhasil");
      setIsValid(true);
    },
    onError: (error) => {
      toast.error(error.message);
      setIsValid(false);
    },
  });

  const handleQrScan = (res: IDetectedBarcode[]) => {
    const value = res[0].rawValue.split("=")[1];
    setTicketId(value);

    mutate(value);
  };

  return {
    isPending,
    ticketId,
    handleQrScan,
    isValid,
  };
}
