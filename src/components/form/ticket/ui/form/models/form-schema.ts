import { z } from "zod";

export const ticketSchema = z.object({
  full_name: z.string().min(3, "Nama lengkap harus dilengkapi"),
  email: z.string().email().min(3, "Email harus dilengkapi"),
  phone_number: z.string().min(4, "Nomor telepon harus dilengkapi"),
  institution: z.string().min(1, "Asal Institusi harus dilengkapi"),
  amount: z.number().min(1, "Jumlah tiket harus dilengkapi").max(10),
});
