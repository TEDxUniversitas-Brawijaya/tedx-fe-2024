import { z } from "zod";

export const refundSchema = z.object({
  event: z.enum(["propa3-day1", "propa3-day2", "propa3-day3", "main-event"], {
    required_error: "Event harus dipilih",
  }),
  requesterName: z.string({ required_error: "Nama lengkap harus dilengkapi" }),
  orderNumber: z.string({ required_error: "Nomer order harus dilengkapi" }),
  requesterEmail: z
    .string({ required_error: "Email harus dilengkapi" })
    .email(),
  paymentProof: z
    .string({ required_error: "Bukti pembayaran harus dilengkapi" })
    .url(),
  paymentMethod: z.string({
    required_error: "Metode pembayran harus dilengkapi",
  }),
  cancellationReason: z.enum(
    [
      "Pembayaran ganda atau lebih",
      "Pembatalan acara",
      "Pergantian tanggal acara",
    ],
    {
      required_error: "Alasan pembatalan harus dipilih",
    },
  ),
  paymentNumber: z.string({
    required_error: "Nomor rekening harus dilengkapi",
  }),
  refundedTickets: z
    .number({ required_error: "Jumlah tiket harus dipilih" })
    .max(10),
});
