import { Button } from "@/components/shared/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/shared/dialog";
import useQueryTransactionById from "@/repository/client/admin/transactions/useQueryTransactionById";
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
      <DialogContent>
        {data?.orders?.tickets?.map(({ id, event, price }) => (
          <div key={id}>
            <p>{event}</p>
            <p>{price}</p>
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
}
