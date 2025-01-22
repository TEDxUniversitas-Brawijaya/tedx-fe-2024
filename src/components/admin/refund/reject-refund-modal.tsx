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
import useUpdateRefund from "@/repository/client/admin/refunds/useUpdateRefund";
import { XIcon } from "lucide-react";
import { useState } from "react";

export default function RejectRefundModal({
  id,
  email,
}: {
  id: string;
  email: string;
}) {
  const [open, setOpen] = useState(false);

  const { isPending, onSubmit } = useUpdateRefund(id, setOpen);

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
        <DialogFooter className="mt-5">
          <Button
            disabled={isPending}
            variant={"outline"}
            onClick={() => setOpen(false)}
          >
            Batal
          </Button>
          <Button
            disabled={isPending}
            onClick={() => onSubmit({ status: "rejected" })}
          >
            Lanjut
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
