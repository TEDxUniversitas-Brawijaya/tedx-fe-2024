import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../shared/form";
import { Input } from "@/components/shared/input";
import { IRootRefund } from "@/types/ticket-types";
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
import { Button } from "@/components/shared/button";
import { FileInput } from "@/components/shared/file-input";

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
                <Input placeholder="Nomor Order" {...field} />
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
                <FormControl>
                  <FileInput {...field} placeholder="Bukti Pembayaran" />
                </FormControl>
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
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Alasan Pembatalan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="multiple-payment">
                      Pembayaran ganda atau lebih
                    </SelectItem>
                    <SelectItem value="event-cancelation">
                      Pembatalan acara
                    </SelectItem>
                    <SelectItem value="event-resechedule">
                      Pergantian tanggal acara
                    </SelectItem>
                  </SelectContent>
                </Select>
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
