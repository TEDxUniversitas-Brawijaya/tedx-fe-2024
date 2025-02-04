"use client";

import { ActionFooter } from "@/components/shared/action-footer";
import { Button } from "@/components/shared/button";
import CreamDialogBackground from "@/components/shared/cream-dialog-background";
import { Dialog, DialogHeader, DialogTitle } from "@/components/shared/dialog";
import DialogDetailItem from "@/components/shared/dialog-detail-item";
import { FileInput } from "@/components/shared/file-input";
import Footer from "@/components/shared/footer";
import { Separator } from "@/components/shared/separator";
import { useDialogReducer } from "@/hooks/useDialogReducer";
import { formatToRupiah } from "@/lib/helpers/formatToRupiah";
import { useCreateMerch } from "@/repository/client/merch/use-create-merch";
import { DialogType } from "@/types/general-types";
import { ICreateMerchOrderPayload, IMerchData } from "@/types/merch-types";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FormMerch from "../ui/form-merch";

interface IClientFormMerchPage {
  item: string;
  merch: IMerchData;
}

const ClientFormMerchPage = ({ item, merch }: IClientFormMerchPage) => {
  const { dialogState, openDialog, closeDialog } =
    useDialogReducer<ICreateMerchOrderPayload>();
  const [paymentProofUrl, setPaymentProofUrl] = useState<string>();

  const router = useRouter();

  const handleSubmit = (data: ICreateMerchOrderPayload) => {
    openDialog("create", data);
  };

  const handleFileUpload = (url: string | undefined) => {
    setPaymentProofUrl(url);
  };

  const { mutateAsync: createTicket, isPending } = useCreateMerch();

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

  const quantity = dialogState.data?.quantity ?? 1;
  const price = merch?.price ?? 0;
  const totalPrice = quantity * price;

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
          <DialogDetailItem label="Item" value={item ?? "-"} />
          <DialogDetailItem
            label="Email"
            capitalize={false}
            value={dialogState.data?.email ?? "-"}
          />
          <DialogDetailItem
            label="Alamat"
            value={dialogState.data?.address ?? "-"}
          />
          <DialogDetailItem
            label="Nomor Telepon"
            value={dialogState.data?.phone ?? "-"}
          />
          <DialogDetailItem
            label="Jumlah"
            value={String(dialogState.data?.quantity) ?? "-"}
          />
          <DialogDetailItem
            label="Ukuran"
            value={String(dialogState.data?.sizes) ?? "-"}
          />
        </div>
        <Separator className="my-6 bg-[#7E7E7E]/40" />
        <DialogDetailItem label="Total" value={formatToRupiah(totalPrice)} />
        <ActionFooter
          primaryText="Bayar Sekarang"
          secondaryText="Kembali"
          primaryProps={{
            type: "button",
            onClick: () => {
              if (dialogState.data) {
                openDialog("payment", dialogState.data);
              }
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
        <DialogHeader className="mb-5">
          <DialogTitle className="text-center">
            <Image
              src={"/img/qris.png"}
              alt="Qr Code"
              width={200}
              height={200}
              className="mx-auto mb-5"
            />
            <h3 className="font-semibold">TEDXUNIVERSITAS BRAWIJAYA, LWKWR</h3>
            <p className="text-base font-normal">NMID : ID1025371978905</p>
          </DialogTitle>
        </DialogHeader>
        <Image
          src={"/img/qr-code.png"}
          alt="Qr Code"
          width={200}
          height={200}
          className="mx-auto mb-10"
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
              if (dialogState.data) {
                openDialog("create", dialogState.data);
              }
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
            Pembayaran Berhasil
          </DialogTitle>
        </DialogHeader>
        <DotLottieReact
          src="/lottie/success.lottie"
          className="mx-auto mb-10 size-[240px]"
          autoplay
        />
        <p className="mb-8 text-center text-tedx-black/90">
          Terima kasih sudah bertransaksi dengan kami. Transaksimu akan segera
          kami proses dan akan dikirimkan melalui email.
        </p>
        <Button
          type="button"
          variant={"outlineRed"}
          className="w-full"
          onClick={() => router.push("/store/merch")}
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
            Form Pembelian Merch
          </h1>
          <p className="text-center text-white/50">
            Lengkapi identitas kamu sebagai bagian dari pejuang pencarian Mantra
            Diri bersama TEDxUniversitasBrawijaya!
          </p>
          <p className="text-center text-tedx-red/80">
            Note : kamu memilih <span>{merch.name}</span>
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-14 max-w-[320px] md:max-w-[466px]">
          <FormMerch
            onSubmit={handleSubmit}
            onCancel={() => window.history.back()}
            item={item}
            merch={merch}
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

export default ClientFormMerchPage;
