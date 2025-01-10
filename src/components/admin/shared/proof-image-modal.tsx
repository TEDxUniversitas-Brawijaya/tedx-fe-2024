import { Button } from "@/components/shared/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/dialog";
import { ImageIcon } from "lucide-react";

export default function ProofImageModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"}>
          <ImageIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Bukti Pembayaran</DialogTitle>
          <DialogDescription>
            Johan Sutardjo - 4x Presale Propaganda 3
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="aspect-square w-full rounded-lg bg-neutral-200"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
