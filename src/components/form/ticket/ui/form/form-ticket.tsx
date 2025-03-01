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
import {
  ICreateTicketPayload,
  ITicketInfoDetail,
  TicketEventEnum,
} from "@/types/ticket-types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/select";
import { ticketSchema } from "./models/form-schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formtTicketProperties } from "@/lib/ticket";

interface IFormTicket {
  event: TicketEventEnum;
  ticket: ITicketInfoDetail;
  onSubmit: (data: ICreateTicketPayload) => void;
  onCancel: () => void;
}

type FormSchema = z.infer<typeof ticketSchema>;

const FormTicket = ({ event, ticket, onSubmit, onCancel }: IFormTicket) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(ticketSchema),
  });

  function handleSubmit(data: z.infer<typeof ticketSchema>) {
    const payload = {
      ...data,
      orderType: "ticket-regular",
      ticketType: formtTicketProperties(ticket.type, { preserveNumbers: true }),
      ticketEvent: event.replace("propa-3", "propa3"),
    };

    onSubmit(payload);
  }

  const quantityOptions = Array.from(
    { length: Math.min(10, ticket.stock) },
    (_, i) => i + 1,
  );

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
        <FormField
          control={form.control}
          name="institution"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-white">Asal Institusi</FormLabel>
              <FormControl>
                <Input placeholder="Asal Institusi" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem className="space-y-2">
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

        <ActionFooter
          primaryText="Daftar"
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

export default FormTicket;
