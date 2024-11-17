import { useEffect, useRef } from "react";

export default function MobileSection3() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement?.play();
        } else {
          videoElement?.pause();
        }
      },
      { threshold: 0.5 },
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <section className="flex h-screen items-center justify-center bg-black">
      <div className="flex aspect-video w-3/4 items-center justify-center bg-gray-500 text-white">
        <video ref={videoRef} controls>
          <source
            src="https://res.cloudinary.com/dcvnwpyd9/video/upload/v1731742983/tedxuniversitasbrawijaya2025/Opening_Teasing_ivum3z.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
