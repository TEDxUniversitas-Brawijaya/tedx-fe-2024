"use client";

import { Button } from "@/components/shared/button";
import { Dialog, DialogHeader, DialogTitle } from "@/components/shared/dialog";
import { DialogType } from "@/types/general-types";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { IRootRefund } from "@/types/ticket-types";
import { useDialogReducer } from "@/hooks/useDialogReducer";
import CreamDialogBackground from "@/components/shared/cream-dialog-background";
import Footer from "@/components/shared/footer";
import FormTicketBundle from "../ui/form/form-ticket";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ClientFormRefundPage = () => {
  const { dialogState, openDialog, closeDialog } = useDialogReducer();

  const router = useRouter();

  const handleSubmit = () => {
    openDialog("success");
  };

  const dialogContent: Partial<Record<DialogType, JSX.Element>> = {
    success: (
      <>
        <DialogHeader className="mb-6 md:mb-10">
          <DialogTitle className="text-center font-header text-4xl font-light md:text-5xl">
            Pengajuan Berhasil
          </DialogTitle>
        </DialogHeader>
        <DotLottieReact
          src="/lottie/success.lottie"
          className="mx-auto mb-10 size-[240px]"
          autoplay
        />
        <p className="mb-8 text-center text-tedx-black/90">
          Pengajuan berhasil, pengajuan anda akan kami proses segera mungkins
        </p>
        <Button
          type="button"
          variant={"outlineRed"}
          className="w-full"
          onClick={() => router.push("/")}
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
          <h1 className="text-center font-header text-6xl text-white">
            Form Refund
          </h1>
          <p className="text-center text-white/50">
            Silakan isi formulir di bawah ini untuk mengajukan pengembalian
            dana. Kami akan memprosesnya segera mungkin
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-14 max-w-[320px] md:max-w-[580px] lg:max-w-[860px]">
          <FormTicketBundle onSubmit={handleSubmit} />
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

export default ClientFormRefundPage;
