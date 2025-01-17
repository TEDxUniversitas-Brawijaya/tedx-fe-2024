"use client";

import { ActionFooter } from "@/components/shared/action-footer";
import { Button } from "@/components/shared/button";
import { Dialog, DialogHeader, DialogTitle } from "@/components/shared/dialog";
import { DialogType } from "@/types/general-types";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FileIcon } from "lucide-react";
import { Input } from "@/components/shared/input";
import { IRootTicket, TicketTypeEnum } from "@/types/ticket-types";
import { Separator } from "@/components/shared/separator";
import { useDialogReducer } from "@/hooks/useDialogReducer";
import CreamDialogBackground from "@/components/shared/cream-dialog-background";
import DialogDetailItem from "@/components/shared/dialog-detail-item";
import Footer from "@/components/shared/footer";
import FormTicketBundle from "../ui/form/form-ticket";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ClientFormTicketBundlePage = ({ type }: { type: TicketTypeEnum }) => {
  const { dialogState, openDialog, closeDialog } =
    useDialogReducer<IRootTicket>();

  const router = useRouter();

  const handleSubmit = (data: IRootTicket) => {
    openDialog("create", data);
  };

  const dialogContent: Partial<Record<DialogType, JSX.Element>> = {
    create: (
      <>
        <DialogHeader className="mb-14">
          <DialogTitle className="text-center font-header text-5xl font-light">
            Detail Pembelian
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          <DialogDetailItem
            label="Nama Lengkap"
            value={dialogState.data?.full_name ?? "-"}
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
            value={dialogState.data?.type ?? "-"}
          />
          <DialogDetailItem
            label="Nomor Telepon"
            value={dialogState.data?.phone_number ?? "-"}
          />
          <DialogDetailItem
            label="Jumlah Tiket"
            value={String(dialogState.data?.amount) ?? "-"}
          />
        </div>
        <Separator className="my-6 bg-[#7E7E7E]/40" />
        <ActionFooter
          primaryText="Bayar Sekarang"
          secondaryText="Kembali"
          primaryProps={{
            type: "button",
            onClick: () => {
              openDialog("payment");
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
        <DialogHeader className="mb-14">
          <DialogTitle className="text-center font-header text-5xl font-light">
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
        <div className="relative">
          <Input type="file" className="cursor-pointer pl-24 file:hidden" />
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pb-0 pl-2 pt-[0.1rem] text-[#7E7E7E] md:pb-[0.1rem] md:pt-0">
            <FileIcon className="mr-2 h-4 w-4" />
            <p className="text-base leading-[1rem] md:text-sm">Upload</p>
            <Separator orientation="vertical" className="ml-2" />
          </div>
        </div>
        <ActionFooter
          primaryText="Upload Bukti Pembayaran"
          secondaryText="Kembali"
          primaryProps={{
            type: "button",
            onClick: () => {
              openDialog("success");
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
    success: (
      <>
        <DialogHeader className="mb-10">
          <DialogTitle className="text-center font-header text-5xl font-light">
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
      <section className="relative min-h-screen w-full overflow-hidden bg-tedx-black py-[120px]">
        <div className="relative z-10 mx-auto w-[60%] space-y-10">
          <h1 className="text-center font-header text-6xl text-white">
            Form Registrasi
          </h1>
          <p className="text-center text-white/50">
            Rengkuhlah kehendak tertinggi dalam dirimu dan temukan potensi
            tersembunyi. Mulailah langkah kecil ini dengan mengisi formulir di
            bawah, dan nyalakan cahaya baru dalam perjalananmu.
          </p>
          <p className="text-center text-tedx-red/80">
            Note : kamu memilih bundling 3 ( Ticket main event & ticket 1 day
            propa 3 )
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-14 max-w-[466px]">
          <FormTicketBundle
            type={type}
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

export default ClientFormTicketBundlePage;
