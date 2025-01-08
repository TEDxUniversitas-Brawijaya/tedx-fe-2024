import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function MobileSection3() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: false,
  });

  // Only play when video is in view
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch((error) => {
          console.error("Video play failed:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="relative z-0 h-screen overflow-hidden bg-[#1A1A1A]"
    >
      <div className="sticky left-0 top-0 flex h-screen w-full items-center justify-center">
        <div className="absolute h-full w-full bg-gradient-to-t from-[#131012] to-[#540D00]" />

        <div className="absolute aspect-video h-[130%] opacity-25">
          <Image
            src={"/img/paper-texture-6-mobile.png"}
            alt="Paper Texture"
            fill
            priority
          />
        </div>

        <div className="absolute flex max-w-[24rem] flex-col items-center justify-center gap-11 p-4 text-center text-white">
          <div className="flex max-w-[22rem] flex-col items-center justify-center gap-6">
            <h1 className="font-header text-2xl">
              &quot;Langkah Kecil Adalah Kunci Untuk Menemukan Terang&quot;
            </h1>
            <div className="mx-auto h-fit w-full">
              <video
                ref={videoRef}
                className="w-full"
                playsInline
                loop
                controls
                preload="metadata"
              >
                <source
                  src="https://res.cloudinary.com/dcvnwpyd9/video/upload/v1734493121/tedxuniversitasbrawijaya2025/fixmp4-reduces_upewoj.mp4"
                  type="video/mp4"
                />
                <span className="text-center text-xl font-semibold">
                  Broswer tidak dapat menampilkan video
                </span>
              </video>
            </div>
          </div>
          <p className="text-xs">
            Dalam pemberhentian singkat ini, kami ingin membagikan beberapa
            pengalaman teman-teman dalam proses kembali menemukan api yang telah
            redup. Jadikan ini sebagai langkah kecil kamu untuk menjadi bagian
            dari perubahan
          </p>
        </div>

        <div className="absolute top-0 h-[35%] w-full bg-gradient-to-b from-[#0E0E0E] from-5% to-transparent to-80%" />
      </div>
    </section>
  );
}
