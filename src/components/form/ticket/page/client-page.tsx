"use client";

import { ActionFooter } from "@/components/shared/action-footer";
import { Button } from "@/components/shared/button";
import { Dialog, DialogHeader, DialogTitle } from "@/components/shared/dialog";
import { DialogType } from "@/types/general-types";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  ICreateTicketPayload,
  ITicketInfoDetail,
  TicketEventEnum,
} from "@/types/ticket-types";
import { Separator } from "@/components/shared/separator";
import { useDialogReducer } from "@/hooks/useDialogReducer";
import CreamDialogBackground from "@/components/shared/cream-dialog-background";
import DialogDetailItem from "@/components/shared/dialog-detail-item";
import Footer from "@/components/shared/footer";
import FormTicket from "../ui/form/form-ticket";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FileInput } from "@/components/shared/file-input";
import { useState } from "react";
import { useCreateTicket } from "@/repository/client/ticket/use-create-ticket";
import { getTicketNotes } from "@/lib/ticket";
import { formatToRupiah } from "@/lib/utils";

interface IClientFormTicketPage {
  event: TicketEventEnum;
  ticket: ITicketInfoDetail;
}

const ClientFormTicketPage = ({ event, ticket }: IClientFormTicketPage) => {
  const { dialogState, openDialog, closeDialog } =
    useDialogReducer<ICreateTicketPayload>();
  const [paymentProofUrl, setPaymentProofUrl] = useState<string>();

  const router = useRouter();

  const handleSubmit = (data: ICreateTicketPayload) => {
    openDialog("create", data);
  };

  const handleFileUpload = (url: string | undefined) => {
    setPaymentProofUrl(url);
  };

  const { mutateAsync: createTicket, isPending } = useCreateTicket();

  const handlePaymentSubmit = async () => {
    if (dialogState.data) {
      const payloadWithProof = {
        ...dialogState.data,
        paymentProof: paymentProofUrl,
      };

      await createTicket(payloadWithProof, {
        onSuccess: () => {
          openDialog("success");
        },
      });
    }
  };

  const dialogContent: Partial<Record<DialogType, JSX.Element>> = {
    create: (
      <>
        <DialogHeader className="mb-10 md:mb-14">
          <DialogTitle className="text-center font-header text-4xl font-light md:text-5xl">
            Detail Pembelian
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <DialogDetailItem
            label="Nama Lengkap"
            value={dialogState.data?.name ?? "-"}
          />
          <DialogDetailItem
            label="Asal Institusi"
            value={dialogState.data?.institution ?? "-"}
          />
          <DialogDetailItem
            label="Email"
            value={dialogState.data?.email ?? "-"}
          />
          <DialogDetailItem
            label="Tipe Tiket"
            value={dialogState.data?.orderType ?? "-"}
          />
          <DialogDetailItem
            label="Nomor Telepon"
            value={dialogState.data?.phone ?? "-"}
          />
          <DialogDetailItem
            label="Jumlah Tiket"
            value={String(dialogState.data?.quantity) ?? "-"}
          />
        </div>
        <Separator className="my-6 bg-[#7E7E7E]/40" />
        <DialogDetailItem label="Total" value={formatToRupiah(ticket.price)} />
        <ActionFooter
          primaryText="Bayar Sekarang"
          secondaryText="Kembali"
          primaryProps={{
            type: "button",
            onClick: () => {
              openDialog("payment", dialogState.data!);
            },
          }}
          secondaryProps={{
            onClick: closeDialog,
            type: "button",
          }}
          primaryClassName="text-black"
        />
      </>
    ),
    payment: (
      <>
        <DialogHeader className="mb-10 md:mb-14">
          <DialogTitle className="text-center font-header text-4xl font-light md:text-5xl">
            Bukti Pembayaran
          </DialogTitle>
        </DialogHeader>
        <Image
          src={"/img/qr-code.png"}
          alt="Qr Code"
          width={200}
          height={200}
          className="mx-auto mb-14"
        />
        <FileInput onChange={handleFileUpload} />
        <ActionFooter
          primaryText="Upload Bukti Pembayaran"
          secondaryText="Kembali"
          primaryProps={{
            type: "button",
            onClick: handlePaymentSubmit,
            disabled: isPending || !paymentProofUrl,
          }}
          secondaryProps={{
            onClick: () => {
              openDialog("create", dialogState.data!);
            },
            type: "button",
          }}
          primaryClassName="text-black"
        />
      </>
    ),
    success: (
      <>
        <DialogHeader className="mb-6 md:mb-10">
          <DialogTitle className="text-center font-header text-4xl font-light md:text-5xl">
            Pembayaran Behasil
          </DialogTitle>
        </DialogHeader>
        <DotLottieReact
          src="/lottie/success.lottie"
          className="mx-auto mb-10 size-[240px]"
          autoplay
        />
        <p className="mb-8 text-center text-tedx-black/90">
          Terima kasih sudah bertransaksi dengan kami. Periksa tiketmu sekarang
          pada email yang terdaftar.
        </p>
        <Button
          type="button"
          variant={"outlineRed"}
          className="w-full"
          onClick={() => router.push("/store/ticket")}
        >
          Kembali
        </Button>
      </>
    ),
  };

  return (
    <main>
      <section className="relative min-h-screen w-full overflow-hidden bg-tedx-black pb-16 pt-[120px] md:py-[120px]">
        <div className="relative z-10 mx-auto w-[80%] space-y-10 md:w-[60%]">
          <h1 className="text-center font-header text-5xl text-white md:text-6xl">
            Form Registrasi
          </h1>
          <p className="text-center text-white/50">
            Rengkuhlah kehendak tertinggi dalam dirimu dan temukan potensi
            tersembunyi. Mulailah langkah kecil ini dengan mengisi formulir di
            bawah, dan nyalakan cahaya baru dalam perjalananmu.
          </p>
          <p className="text-center text-tedx-red/80">
            {getTicketNotes("Main Event")}
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-14 max-w-[320px] md:max-w-[466px]">
          <FormTicket
            event={event}
            ticket={ticket}
            onSubmit={handleSubmit}
            onCancel={() => window.history.back()}
          />
        </div>

        {/* Background Images */}
        <div className="absolute left-[28%] top-10 opacity-50">
          <Image
            src="/img/plain-x-logo.png"
            alt="X Logo"
            className="-rotate-[-25.98deg]"
            draggable={false}
            width={200}
            height={200}
          />
        </div>
        <div className="absolute -bottom-1/3 left-1/2 -translate-x-1/2">
          <Image
            src="/img/circular-eye.png"
            alt="Eye Circular"
            draggable={false}
            width={600}
            height={600}
          />
        </div>
        <div className="absolute left-0 top-0 h-full w-full opacity-[0.15]">
          <Image
            src="/img/paper-texture-4.png"
            alt="Paper Texture"
            className="object-cover"
            draggable={false}
            fill
            priority
          />
        </div>
      </section>
      <Footer />
      <Dialog
        open={dialogState.isOpen}
        onOpenChange={(open) => !open && closeDialog()}
      >
        <CreamDialogBackground>
          {dialogState.type && dialogContent[dialogState.type]}
        </CreamDialogBackground>
      </Dialog>
    </main>
  );
};

export default ClientFormTicketPage;
