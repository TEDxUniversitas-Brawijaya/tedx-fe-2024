import { z } from "zod";

export const refundSchema = z.object({
  type: z.enum(["propa-3", "main-event"]),
  full_name: z.string().min(3, "Nama lengkap harus dilengkapi"),
  order_number: z.string().min(1, "Nomor order harus dilengkapi"),
  email: z.string().email().min(3, "Email harus dilengkapi"),
  payment_url: z.string().url().min(1, "Bukti pembayaran harus dilengkapi"),
  payment_method: z.string().min(1, "Metode pembayaran harus dilengkapi"),
  reason: z.string().min(1, "Alasan pembatalan harus dilengkapi"),
  bank_number: z.string().min(1, "Nomor Rekening harus dilengkapi"),
  amount: z.number().min(1, "Jumlah tiket harus dilengkapi").max(10),
});
