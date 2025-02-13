"use client";

import useCheckIn from "@/repository/client/admin/tickets/useCheckIn";
import { Scanner } from "@yudiel/react-qr-scanner";
import { CheckCircleIcon, XIcon } from "lucide-react";

export default function CheckInPage() {
  const { ticketId, handleQrScan, isPending, isValid } = useCheckIn();

  return (
    <main className="flex flex-col items-center gap-5 rounded-xl bg-white p-5">
      <section
        className={`relative flex size-52 items-center justify-center overflow-hidden rounded-xl bg-neutral-200 ${isPending && "animate-pulse"}`}
      >
        {isPending ? (
          <div className="flex items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-neutral-200 border-t-tedx-red"></div>
          </div>
        ) : (
          <Scanner
            onScan={handleQrScan}
            classNames={{
              video: "absolute inset-0 size-full object-cover",
            }}
            components={{
              finder: false,
            }}
            allowMultiple={true}
          />
        )}
      </section>
      <section className="space-y-2">
        <div className="text-center">
          <h3 className="font-semibold">Ticket ID</h3>
          {!isPending ? <p>{ticketId ?? "-"}</p> : <p>Loading...</p>}
        </div>
        <div className="flex flex-col items-center gap-1">
          <h3 className="font-semibold">Status</h3>
          {isPending ? (
            <p>Loading...</p>
          ) : isValid ? (
            <div className="flex w-fit items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-sm font-medium text-emerald-600">
              <CheckCircleIcon size={15} /> <span>Valid</span>
            </div>
          ) : (
            <div className="flex w-fit items-center gap-1 rounded-full bg-rose-100 px-2 py-1 text-sm font-medium text-rose-600">
              <XIcon size={15} /> <span>Invalid</span>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
