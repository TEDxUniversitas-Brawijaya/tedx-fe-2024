import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../shared/form";
import { ActionFooter } from "@/components/shared/action-footer";
import { Input } from "@/components/shared/input";
import { IRootRefund, IRootTicket, TicketTypeEnum } from "@/types/ticket-types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { refundSchema } from "./models/form-schema";
import { FileIcon } from "lucide-react";
import { Separator } from "@/components/shared/separator";
import { Button } from "@/components/shared/button";

interface IFormTicketBundle {
  onSubmit: (data: IRootRefund) => void;
}

type FormSchema = z.infer<typeof refundSchema>;

const FormTicketBundle = ({ onSubmit }: IFormTicketBundle) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(refundSchema),
  });

  function handleSubmit(data: z.infer<typeof refundSchema>) {
    const payload = {
      ...data,
    };

    console.log(JSON.stringify(payload));
    onSubmit(payload);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="grid grid-cols-4 gap-4"
      >
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem className="col-span-4 space-y-2 md:col-span-2">
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
          name="order_number"
          render={({ field }) => (
            <FormItem className="col-span-4 space-y-2 md:col-span-2">
              <FormLabel className="text-white">Nomer Order</FormLabel>
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
            <FormItem className="col-span-4 space-y-2 md:col-span-2">
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
          name="amount"
          render={({ field }) => (
            <FormItem className="col-span-4 space-y-2 md:col-span-2 lg:col-span-1">
              <FormLabel className="text-white">Jumlah Tiket</FormLabel>
              <Select
                onValueChange={(value) => field.onChange(Number(value))}
                value={field.value?.toString()}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Jumlah Tiket" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                  <SelectItem value="7">7</SelectItem>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="9">9</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="payment_url"
          render={({ field }) => (
            <FormItem className="col-span-4 space-y-2 lg:col-span-1">
              <FormLabel className="text-white">Bukti Pembayaran</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type="file"
                    className="cursor-pointer pl-24 file:hidden"
                    {...field}
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pb-0 pl-2 pt-[0.1rem] text-[#7E7E7E] md:pb-[0.1rem] md:pt-0">
                    <FileIcon className="mr-2 h-4 w-4" />
                    <p className="text-base leading-[1rem] md:text-sm">
                      Upload
                    </p>
                    <Separator orientation="vertical" className="ml-2" />
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="col-span-4 space-y-2 md:col-span-2">
              <FormLabel className="text-white">Event</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Event" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="propa-3">Propaganda 3</SelectItem>
                  <SelectItem value="main-event">Main Event</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="payment_method"
          render={({ field }) => (
            <FormItem className="col-span-4 space-y-2 md:col-span-2">
              <FormLabel className="text-white">Metode Pembayaran</FormLabel>
              <FormControl>
                <Input placeholder="Metode Pembayaran" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem className="col-span-4 space-y-2 md:col-span-2">
              <FormLabel className="text-white">Alasan Pembatalan</FormLabel>
              <FormControl>
                <Input placeholder="Alasan Pembatalan" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bank_number"
          render={({ field }) => (
            <FormItem className="col-span-4 space-y-2 md:col-span-2">
              <FormLabel className="text-white">Nomor Rekening</FormLabel>
              <FormControl>
                <Input placeholder="Nomor Rekening" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="defaultRed" className="col-span-4 mt-6">
          Ajukan
        </Button>
      </form>
    </Form>
  );
};

export default FormTicketBundle;
