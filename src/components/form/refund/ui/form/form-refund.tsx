import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../shared/form";
import { Input } from "@/components/shared/input";
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
import { ICreateTicketRefundPayload } from "@/types/refund-types";

interface IFormTicketBundle {
  onSubmit: (data: ICreateTicketRefundPayload) => void;
  isLoading: boolean;
}

type FormSchema = z.infer<typeof refundSchema>;

const FormTicketBundle = ({ onSubmit, isLoading }: IFormTicketBundle) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(refundSchema),
  });

  function handleSubmit(data: z.infer<typeof refundSchema>) {
    const payload = {
      ...data,
    };
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
          name="requesterName"
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
          name="orderNumber"
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
          name="requesterEmail"
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
          name="refundedTickets"
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
          name="paymentProof"
          render={({ field: { value, onChange, ...field } }) => (
            <FormItem className="col-span-4 space-y-2 lg:col-span-1">
              <FormLabel className="text-white">Bukti Pembayaran</FormLabel>
              <FormControl>
                <FormControl>
                  <FileInput
                    {...field}
                    onChange={onChange}
                    placeholder="Bukti Pembayaran"
                  />
                </FormControl>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="event"
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
                  <SelectItem value="main-event">Main Event</SelectItem>
                  <SelectItem value="propa3-day1">
                    Propaganda 3 Day 1
                  </SelectItem>
                  <SelectItem value="propa3-day2">
                    Propaganda 3 Day 2
                  </SelectItem>
                  <SelectItem value="propa3-day3">
                    Propaganda 3 Day 3
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="paymentMethod"
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
          name="cancellationReason"
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
                    <SelectItem value="Pembayaran ganda atau lebih">
                      Pembayaran ganda atau lebih
                    </SelectItem>
                    <SelectItem value="Pembatalan acara">
                      Pembatalan acara
                    </SelectItem>
                    <SelectItem value="Pergantian tanggal acara">
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
          name="paymentNumber"
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
        <Button
          type="submit"
          variant="defaultRed"
          className="col-span-4 mt-6"
          disabled={isLoading}
        >
          Ajukan
        </Button>
      </form>
    </Form>
  );
};

export default FormTicketBundle;
