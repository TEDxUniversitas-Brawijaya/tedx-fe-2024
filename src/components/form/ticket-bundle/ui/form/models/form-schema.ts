import { z } from "zod";

const VALID_SIZES = ["S", "M", "L", "XL"] as const;

const validateMerchSizes = (value: string, amount: number) => {
  const sizes = value
    .trim()
    .split(",")
    .map((size) => size.trim().toUpperCase());

  if (sizes.length !== amount) {
    return false;
  }

  return sizes.every((size) =>
    VALID_SIZES.includes(size as (typeof VALID_SIZES)[number]),
  );
};

const formSchema = z.object({
  full_name: z.string().min(3, "Nama lengkap harus dilengkapi"),
  email: z
    .string()
    .email("Format email tidak valid")
    .min(3, "Email harus dilengkapi"),
  phone_number: z.string().min(4, "Nomor telepon harus dilengkapi"),
  institution: z.string().min(1, "Asal Institusi harus dilengkapi"),
  amount: z.number().min(1, "Jumlah tiket harus dilengkapi").max(10),
  merch_size: z.string().min(1, "Ukuran merch harus dilengkapi"),
});

export const ticketBundleSchema = formSchema.refine(
  (data) => validateMerchSizes(data.merch_size, data.amount),
  {
    message:
      "Masukkan ukuran yang valid (S/M/L/XL) dipisahkan dengan koma sesuai jumlah tiket",
    path: ["merch_size"],
  },
);
