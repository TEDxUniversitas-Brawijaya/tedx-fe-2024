import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const DesktopSection3 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    margin: "-45% 0px -45% 0px",
    once: false,
  });

  // Only play when video is in view
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      className="flex h-screen items-center justify-center bg-black"
    >
      <div className="flex aspect-video h-3/4 w-3/4 items-center justify-center font-header text-white">
        <video
          ref={videoRef}
          className="h-full w-full"
          playsInline
          loop
          controls
          preload="metadata"
        >
          <source
            src="https://res.cloudinary.com/dcvnwpyd9/video/upload/v1731742983/tedxuniversitasbrawijaya2025/Opening_Teasing_ivum3z.mp4"
            type="video/mp4"
          />
          <span className="text-center text-xl font-semibold">
            Broswer tidak dapat menampilkan video
          </span>
        </video>
      </div>
    </section>
  );
};

export default DesktopSection3;
