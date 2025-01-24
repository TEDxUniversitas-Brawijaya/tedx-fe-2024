import { Button } from "@/components/shared/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/shared/dialog";
import { formatToRupiah } from "@/lib/helpers/formatToRupiah";
import useQueryTransactionById from "@/repository/client/admin/transactions/useQueryTransactionById";
import { DialogTitle } from "@radix-ui/react-dialog";
import { EyeIcon } from "lucide-react";

export default function TransactionDetailModal({ id }: { id: string }) {
  const { data, refetch } = useQueryTransactionById(id);

  return (
    <Dialog>
      <DialogTrigger>
        <Button onClick={() => refetch()} size={"icon"} variant="outline">
          <EyeIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80dvh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">List Item</DialogTitle>
          <DialogDescription>
            {data?.order?.name} - {data?.order?.email}
          </DialogDescription>
        </DialogHeader>
        <div className="divide-y">
          {data?.order?.tickets?.map(({ id, event, price, number }) => (
            <div key={id} className="flex justify-between gap-2 py-2">
              <div>
                <p className="font-medium capitalize">
                  Tiket {event.replaceAll("-", " ")}
                </p>
                <p className="text-xs text-neutral-400">{number}</p>
              </div>
              <p>{formatToRupiah(price)}</p>
            </div>
          ))}
          <div className="flex justify-between gap-2 py-2 font-bold">
            <p>Total</p>
            <p>{formatToRupiah(data?.order?.totalPrice || 0)}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
