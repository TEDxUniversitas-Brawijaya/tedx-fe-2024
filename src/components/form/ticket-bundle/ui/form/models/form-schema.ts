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

const baseSchema = {
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
};

export const createTicketBundleSchema = (isMerchAvailable: boolean) => {
  const schema = isMerchAvailable
    ? {
        ...baseSchema,
        merch_size: z.string().min(1, "Ukuran merch harus dilengkapi"),
      }
    : {
        ...baseSchema,
        merch_size: z.string().optional(),
      };

  const formSchema = z.object(schema);

  return isMerchAvailable
    ? formSchema.refine(
        (data) => validateMerchSizes(data.merch_size!, data.quantity),
        {
          message:
            "Masukkan ukuran yang valid (S/M/L/XL) dipisahkan dengan koma sesuai jumlah tiket",
          path: ["merch_size"],
        },
      )
    : formSchema;
};
