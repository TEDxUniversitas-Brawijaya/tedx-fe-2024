import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

export const DesktopSection3 = () => {

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: false,
  });

  // Only play when video is in view
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(error => {
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
      style={{
        background: `linear-gradient(
            to bottom,
            rgb(14 14 14) 20%,
            rgb(84 13 0),
            rgb(14 14 14)
        )`,
      }}
      className="relative z-0 flex flex-col items-center gap-24 overflow-hidden bg-[#1A1A1A] px-20 py-44 text-center text-white"
    >
      <div className="absolute left-0 top-0 h-full w-full opacity-[0.15]">
        <Image
          src="/img/paper-texture-4.png"
          alt="Paper Texture"
          draggable={false}
          fill
          priority
        />
      </div>

      <h2 className="max-w-[70%] font-header text-6xl">
        “Langkah Kecil Adalah Kunci <br /> Untuk Menemukan Terang”
      </h2>
      <div className="aspect-video w-2/3 z-20">
        <video
          ref={videoRef}
          className="h-full w-full"
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
      <p className="max-w-[60%] text-xl">
        Dalam pemberhentian singkat ini, kami ingin membagikan beberapa
        pengalaman teman-teman dalam proses kembali menemukan api yang telah
        redup. Jadikan ini sebagai langkah kecil kamu untuk menjadi bagian dari
        perubahan
      </p>
    </section>
  );
};
