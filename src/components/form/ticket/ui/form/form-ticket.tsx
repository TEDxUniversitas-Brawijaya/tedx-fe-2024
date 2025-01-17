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
import { IRootTicket, TicketTypeEnum } from "@/types/ticket-types";
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

interface IFormTicket {
  type: TicketTypeEnum;
  onSubmit: (data: IRootTicket) => void;
  onCancel: () => void;
}

type FormSchema = z.infer<typeof ticketSchema>;

const FormTicket = ({ type, onSubmit, onCancel }: IFormTicket) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(ticketSchema),
  });

  function handleSubmit(data: z.infer<typeof ticketSchema>) {
    const payload = {
      ...data,
      type: type,
    };

    console.log(JSON.stringify(payload));
    onSubmit(payload);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="full_name"
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
          name="phone_number"
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
          name="amount"
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
