import { z } from "zod";

const VALID_SIZES = ["M", "L"] as const;

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

export const baseMerchSchema = {
  name: z.string({ required_error: "Nama lengkap harus dilengkapi" }),
  email: z.string({ required_error: "Email harus dilengkapi" }).email(),
  address: z.string({ required_error: "Alamat lengkap harus dilengkapi" }),
  item1: z.string({ required_error: "Varian Item 1 harus dilengkapi" }),
  item2: z.string({ required_error: "Varian Item 2 harus dilengkapi" }),
  phone: z
    .string({ required_error: "Nomor telepon harus dilengkapi" })
    .regex(/^\+62[1-9]\d{8,11}$/, {
      message:
        "Nomor telepon harus dimulai dengan +62 dan memiliki panjang 10-13 digit",
    }),
  quantity: z
    .number({ required_error: "Jumlah tiket harus dilengkapi" })
    .max(10),
};

export const createMerchBundlingSchema = (hasSize: boolean) => {
  if (!hasSize) return z.object(baseMerchSchema);

  return z
    .object({
      ...baseMerchSchema,
      size: z.string({ required_error: "Ukuran harus dilengkapi" }),
    })
    .refine((data) => validateMerchSizes(data.size!, data.quantity), {
      message:
        "Masukkan ukuran yang valid (M/L) dipisahkan dengan koma sesuai jumlah item",
      path: ["size"],
    });
};
