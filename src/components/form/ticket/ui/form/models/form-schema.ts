import { z } from "zod";

export const ticketSchema = z.object({
  name: z.string({ required_error: "Nama lengkap harus dilengkapi" }),
  email: z.string({ required_error: "Email harus dilengkapi" }).email(),
  phone: z
    .string({ required_error: "Nomor telepon harus dilengkapi" })
    .regex(/^\+62[1-9]\d{8,11}$/, {
      message:
        "Nomor telepon harus dimulai dengan +62 dan memiliki panjang 10-13 digit",
    }),
  institution: z.string({ required_error: "Asal Institusi harus dilengkapi" }),
  quantity: z
    .number({ required_error: "Jumlah tiket harus dilengkapi" })
    .max(10),
});
