import { Button } from "@/components/shared/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/shared/form";
import { Input } from "@/components/shared/input";
import useUpdateRefund from "@/repository/client/admin/refunds/useUpdateRefund";
import { zodResolver } from "@hookform/resolvers/zod";
import { XIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  rejectedReason: z.string().min(1, {
    message: "Alasan penolakan harus diisi",
  }),
});

export default function RejectRefundModal({
  id,
  email,
}: {
  id: string;
  email: string;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rejectedReason: "",
    },
  });

  const [open, setOpen] = useState(false);

  const { isPending, onSubmit } = useUpdateRefund(id, setOpen);

  function onReject(values: z.infer<typeof formSchema>) {
    onSubmit({
      status: "rejected",
      rejectedReason: values.rejectedReason,
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button size={"icon"} className="bg-rose-600 hover:bg-rose-700">
          <XIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tolak Pengajuan Refund?</DialogTitle>
          <DialogDescription>
            Apakah kamu yakin untuk menolak pengajuan ini? Aksi ini bersifat
            permanen dan konfirmasi penolakan akan langsung dikirimkan ke{" "}
            <span className="font-semibold">{email}</span>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onReject)}>
            <FormField
              control={form.control}
              name="rejectedReason"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Masukkan alasan penolakan" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-5 flex justify-end gap-2">
              <Button
                type="button"
                disabled={isPending}
                variant={"outline"}
                onClick={() => setOpen(false)}
              >
                Batal
              </Button>
              <Button disabled={isPending}>Lanjut</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
