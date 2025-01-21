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
import useUpdateTransaction from "@/repository/client/admin/transactions/useUpdateTransaction";
import { XIcon } from "lucide-react";
import { useState } from "react";

export default function RejectTransactionModal({
  id,
  email,
}: {
  id: string;
  email: string;
}) {
  const [open, setOpen] = useState(false);

  const { isPending, onSubmit } = useUpdateTransaction(id, setOpen);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button size={"icon"} className="bg-rose-600 hover:bg-rose-700">
          <XIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tolak Transaksi?</DialogTitle>
          <DialogDescription>
            Apakah kamu yakin untuk menolak transaksi ini? Aksi ini bersifat
            permanen dan konfirmasi penolakan akan langsung dikirimkan ke{" "}
            {email}
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
