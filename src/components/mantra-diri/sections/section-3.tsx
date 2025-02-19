import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Speakercard from "../ui/speaker-card";

export default function Section3() {
  const [hoveredSpeaker, setHoveredSpeaker] = useState<{
    idx: number;
    position: "top" | "bottom";
  } | null>(null);

  return (
    <section className="relative h-screen bg-[#1A1A1A]">
      <motion.div className="sticky left-0 top-0 flex h-screen items-start">
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
          <div className="absolute h-screen w-full bg-gradient-to-b from-[#0F0F0F] to-transparent" />
          <div className="absolute h-screen w-full bg-gradient-to-b from-transparent via-[#082427] to-[#131012]" />

          <div className="absolute aspect-video h-screen">
            <Image
              src="/img/paper-texture-2.png"
              alt="Paper Texture"
              fill
              priority
              className="opacity-25"
            />
          </div>

          <div className="flex h-full w-full flex-col items-center justify-center gap-16">
            <div className="relative flex w-full items-center justify-end">
              <motion.div
                animate={{ x: ["0%", "100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 20, // Adjust based on content length
                  ease: "linear",
                }}
                className="flex items-end justify-start"
              >
                {speakers.map((speaker, idx) => (
                  <Speakercard
                    key={speaker.name}
                    name={speaker.name}
                    img={speaker.img}
                    isHovered={
                      hoveredSpeaker?.position === "top" &&
                      hoveredSpeaker?.idx === idx
                    }
                    onMouseEnter={() =>
                      setHoveredSpeaker({
                        idx,
                        position: "top",
                      })
                    }
                    onMouseLeave={() => setHoveredSpeaker(null)}
                    onClick={() =>
                      hoveredSpeaker?.idx === idx
                        ? setHoveredSpeaker(null)
                        : setHoveredSpeaker({
                            idx,
                            position: "top",
                          })
                    }
                  />
                ))}
              </motion.div>
              <motion.div
                animate={{ x: ["0%", "100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 20, // Adjust based on content length
                  ease: "linear",
                }}
                className="flex items-end justify-start"
              >
                {speakers.map((speaker, idx) => (
                  <Speakercard
                    key={speaker.name}
                    name={speaker.name}
                    img={speaker.img}
                    isHovered={
                      hoveredSpeaker?.position === "top" &&
                      hoveredSpeaker?.idx === idx
                    }
                    onMouseEnter={() =>
                      setHoveredSpeaker({
                        idx,
                        position: "top",
                      })
                    }
                    onMouseLeave={() => setHoveredSpeaker(null)}
                    onClick={() =>
                      hoveredSpeaker?.idx === idx
                        ? setHoveredSpeaker(null)
                        : setHoveredSpeaker({
                            idx,
                            position: "top",
                          })
                    }
                  />
                ))}
              </motion.div>
            </div>
            <div className="relative flex w-full items-center justify-start">
              <motion.div
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 20, // Adjust based on content length
                  ease: "linear",
                }}
                className="flex items-end justify-start"
              >
                {speakers.map((speaker, idx) => (
                  <Speakercard
                    key={speaker.name}
                    name={speaker.name}
                    img={speaker.img}
                    isHovered={
                      hoveredSpeaker?.position === "bottom" &&
                      hoveredSpeaker?.idx === idx
                    }
                    onMouseEnter={() =>
                      setHoveredSpeaker({
                        idx,
                        position: "bottom",
                      })
                    }
                    onMouseLeave={() => setHoveredSpeaker(null)}
                    onClick={() =>
                      hoveredSpeaker?.idx === idx
                        ? setHoveredSpeaker(null)
                        : setHoveredSpeaker({
                            idx,
                            position: "bottom",
                          })
                    }
                  />
                ))}
              </motion.div>
              <motion.div
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 20, // Adjust based on content length
                  ease: "linear",
                }}
                className="flex items-end justify-start"
              >
                {speakers.map((speaker, idx) => (
                  <Speakercard
                    key={speaker.name}
                    name={speaker.name}
                    img={speaker.img}
                    isHovered={
                      hoveredSpeaker?.position === "bottom" &&
                      hoveredSpeaker?.idx === idx
                    }
                    onMouseEnter={() =>
                      setHoveredSpeaker({
                        idx,
                        position: "bottom",
                      })
                    }
                    onMouseLeave={() => setHoveredSpeaker(null)}
                    onClick={() =>
                      hoveredSpeaker?.idx === idx
                        ? setHoveredSpeaker(null)
                        : setHoveredSpeaker({
                            idx,
                            position: "bottom",
                          })
                    }
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const speakers: {
  name: string;
  img: string;
}[] = [
  {
    name: "Akmal Sabil Amrullah",
    img: "/img/speaker-akmal-1.png",
  },
  {
    name: "Mardhian Pratama",
    img: "/img/speaker-mardhian-1.png",
  },
  {
    name: "Khansa Putri Kirana",
    img: "/img/speaker-khansayu-1.png",
  },
  {
    name: "Dimas",
    img: "/img/speaker-dimas-1.png",
  },
  {
    name: "Kala",
    img: "/img/speaker-kala-1.png",
  },
  {
    name: "Rahka Ghanisatria",
    img: "/img/speaker-rahka-1.png",
  },
  {
    name: "Akmal Sabil Amrullah", // TODO
    img: "/img/speaker-akmal-1.png",
  },
  {
    name: "Mardhian Pratama", // TODO
    img: "/img/speaker-mardhian-1.png",
  },
];
