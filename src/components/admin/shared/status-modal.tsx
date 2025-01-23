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
import { ReactNode, useState } from "react";

interface IAcceptModal {
  title: string;
  description: string;
  onClick: VoidFunction;
  triggerEl: ReactNode;
}

export default function StatusModal({
  title,
  description,
  onClick,
  triggerEl,
}: IAcceptModal) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{triggerEl}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-5">
          <Button variant={"outline"} onClick={() => setOpen(false)}>
            Batal
          </Button>
          <Button onClick={onClick}>Lanjut</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
