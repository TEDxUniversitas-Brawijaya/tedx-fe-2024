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
import Image from "next/image";

export default function ProofImageModal({
  url,
  name,
  type,
}: {
  url: string;
  name: string;
  type: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"}>
          <ImageIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] xl:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Bukti Pembayaran</DialogTitle>
          <DialogDescription className="capitalize">
            {name} - {type.replaceAll("-", " ")}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative aspect-square w-full rounded-lg bg-neutral-100">
            <Image
              src={url}
              alt="Payment Proof"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
