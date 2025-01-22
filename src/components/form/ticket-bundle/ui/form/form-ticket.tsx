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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shared/tooltip";
import { InfoIcon } from "lucide-react";
import { createTicketBundleSchema } from "./models/form-schema";
import { formtTicketProperties } from "@/lib/ticket";

interface IFormTicketBundle {
  event: TicketEventEnum;
  ticket: ITicketInfoDetail;
  isMerchAvailable: boolean;
  onSubmit: (data: ICreateTicketPayload) => void;
  onCancel: () => void;
}

const FormTicketBundle = ({
  event,
  ticket,
  isMerchAvailable,
  onSubmit,
  onCancel,
}: IFormTicketBundle) => {
  const ticketBundleSchema = createTicketBundleSchema(isMerchAvailable);
  type FormSchema = z.infer<typeof ticketBundleSchema>;

  const form = useForm<FormSchema>({
    resolver: zodResolver(ticketBundleSchema),
  });

  function handleSubmit(data: z.infer<typeof ticketBundleSchema>) {
    const payload = {
      ...data,
      orderType: formtTicketProperties(ticket.name, {
        preserveNumbers: true,
        separator: "-",
      }),
      ticketEvent: event,
    };

    onSubmit(payload);
  }

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
                <Input placeholder="Email" {...field} />
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
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem
                className={`${isMerchAvailable ? "col-span-2 md:col-span-1" : "col-span-2"} space-y-2`}
              >
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
            name="merchSize"
            render={({ field }) => (
              <FormItem
                className={`${isMerchAvailable ? "block" : "hidden"} col-span-2 space-y-2 md:col-span-1`}
              >
                <div className="flex items-center justify-between">
                  <FormLabel className="text-white">Ukuran Merch</FormLabel>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className="text-white" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-[240px]">
                        <p className="text-xs">
                          Masukan pilihan sesuai dengan jumlah pilihan bundling{" "}
                          <br /> (ex. S,M,XL){" "}
                          <span className="text-tedx-red">
                            *jika memilih 3 bundling
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
        </div>

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

export default FormTicketBundle;
