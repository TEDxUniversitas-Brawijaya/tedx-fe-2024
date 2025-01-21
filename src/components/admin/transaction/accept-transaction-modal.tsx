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
import { CheckIcon } from "lucide-react";
import { useState } from "react";

export default function AcceptTransactionModal({
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
        <Button size={"icon"} className="bg-emerald-600 hover:bg-emerald-700">
          <CheckIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terima Transaksi?</DialogTitle>
          <DialogDescription>
            Apakah kamu yakin untuk melanjutkan transaksi ini? Aksi ini bersifat
            permanen dan tiket akan langsung dikirimkan ke {email}
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
            onClick={() => onSubmit({ status: "accepted" })}
          >
            Lanjut
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
