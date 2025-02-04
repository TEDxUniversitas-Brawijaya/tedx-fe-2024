import { ActionFooter } from "@/components/shared/action-footer";
import { Input } from "@/components/shared/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shared/form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shared/tooltip";
import {
  ICreateMerchOrderPayload,
  IMerchBundlingData,
} from "@/types/merch-types";
import { InfoIcon } from "lucide-react";
import { createMerchBundlingSchema } from "../model/form-schema";
import { merchsData } from "@/lib/static/merchs";

interface IFormTicket {
  item: string;
  merch: IMerchBundlingData;
  onSubmit: (data: ICreateMerchOrderPayload) => void;
  onCancel: () => void;
}

const formatNumToAlphabet = (word: string) => {
  return word.replace(/\d+$/, (match) => {
    const num = parseInt(match);
    return String.fromCharCode(96 + num);
  });
};

const FormMerchBundling = ({
  item,
  merch,
  onSubmit,
  onCancel,
}: IFormTicket) => {
  const merchBundlingSchema = createMerchBundlingSchema(merch.hasSize);

  type FormSchema = z.infer<typeof merchBundlingSchema>;

  const form = useForm<FormSchema>({
    resolver: zodResolver(merchBundlingSchema),
  });

  function handleSubmit(data: z.infer<typeof merchBundlingSchema>) {
    const formattedItemString = formatNumToAlphabet(item);

    const item1 = data.item1.includes("sticker")
      ? formatNumToAlphabet(data.item1)
      : data.item1;
    const item2 = data.item2.includes("sticker")
      ? formatNumToAlphabet(data.item2)
      : data.item2;

    const item1Array = Array(data.quantity).fill(item1);
    const item2Array = Array(data.quantity).fill(item2);

    const payload = {
      ...data,
      orderType: formattedItemString,
      merchItems: [...item1Array, ...item2Array],
      institution: "-",
      sizes: (data as any).size?.replaceAll(" ", "").split(",") || [],
    };

    onSubmit(payload);
  }

  const quantityOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  const [item1, item2] = merch.items;
  const firstItemOptions = merchsData[item1];
  const secondItemOptions = merchsData[item2];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white">Nama Lengkap</FormLabel>
              <FormControl>
                <Input placeholder="Nama Lengkap" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white">Alamat</FormLabel>
              <FormControl>
                <Input placeholder="Alamat" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white">Nomor Telepon</FormLabel>
              <FormControl>
                <Input placeholder="Nomor Telepon" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full gap-4">
          <FormField
            control={form.control}
            name="item1"
            render={({ field }) => (
              <FormItem className="w-full space-y-2">
                <FormLabel className="text-white">Varian Item 1</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(value)}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Varian Item 1" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {firstItemOptions.map(({ name }) => (
                      <SelectItem
                        key={name}
                        value={name
                          .toLowerCase()
                          .replace("t-shirt", "tshirt")
                          .replaceAll(" ", "-")}
                      >
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="item2"
            render={({ field }) => (
              <FormItem className="w-full space-y-2">
                <FormLabel className="text-white">Varian Item 2</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(value)}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Varian Item 2" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {secondItemOptions.map(({ name }) => (
                      <SelectItem
                        key={name}
                        value={name
                          .toLowerCase()
                          .replace("t-shirt", "tshirt")
                          .replaceAll(" ", "-")}
                      >
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full gap-4">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem className="w-full space-y-2">
                <FormLabel className="text-white">Jumlah</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                  value={field.value?.toString()}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Jumlah" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {quantityOptions.map((quantity) => (
                      <SelectItem key={quantity} value={quantity.toString()}>
                        {quantity}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {merch.hasSize && (
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem
                  className={`col-span-2 w-full space-y-2 md:col-span-1`}
                >
                  <div className="flex items-center justify-between">
                    <FormLabel className="text-white">Ukuran Merch</FormLabel>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger type="button">
                          <InfoIcon className="text-white" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-[300px]">
                          <p className="text-xs">
                            Masukan pilihan sesuai dengan jumlah pilihan
                            bundling (ex. M,M,L jika memilih 3 item) <br />
                            <span className="italic text-tedx-red">
                              * size yang tersedia hanya M dan L
                            </span>
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <FormControl>
                    <Input
                      placeholder={`Contoh: ${Array(form.watch("quantity") || 1)
                        .fill("M")
                        .join(",")}`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>

        <ActionFooter
          primaryText="Bayar"
          secondaryText="Kembali"
          primaryProps={{
            type: "submit",
          }}
          secondaryProps={{
            onClick: onCancel,
            type: "button",
          }}
        />
      </form>
    </Form>
  );
};

export default FormMerchBundling;
