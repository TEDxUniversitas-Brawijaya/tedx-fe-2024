import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Speakercard from "../ui/speaker-card";

export default function Section2() {
  const [hoveredSpeaker, setHoveredSpeaker] = useState<{
    name: string;
    position: "top" | "bottom";
  } | null>(null);

  return (
    <section className="relative h-screen bg-[#1A1A1A]">
      <motion.div className="sticky left-0 top-0 flex h-screen items-start">
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
          <div className="absolute h-screen w-full bg-gradient-to-b from-[#0F0F0F] to-transparent" />
          <div className="absolute h-screen w-full bg-gradient-to-b from-transparent via-[#082427] to-[#131012]" />

          <div className="absolute aspect-video h-screen mix-blend-soft-light">
            <Image
              src="/img/paper-texture-3.png"
              alt="Paper Texture"
              fill
              priority
              className="opacity-45"
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
                {speakers.map((speaker) => (
                  <Speakercard
                    key={speaker.name}
                    name={speaker.name}
                    img={speaker.img}
                    isHovered={
                      hoveredSpeaker?.position === "top" &&
                      hoveredSpeaker?.name === speaker.name
                    }
                    onMouseEnter={() =>
                      setHoveredSpeaker({
                        name: speaker.name,
                        position: "top",
                      })
                    }
                    onMouseLeave={() => setHoveredSpeaker(null)}
                    onClick={() =>
                      hoveredSpeaker?.name === speaker.name
                        ? setHoveredSpeaker(null)
                        : setHoveredSpeaker({
                            name: speaker.name,
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
                {speakers.map((speaker) => (
                  <Speakercard
                    key={speaker.name}
                    name={speaker.name}
                    img={speaker.img}
                    isHovered={
                      hoveredSpeaker?.position === "top" &&
                      hoveredSpeaker?.name === speaker.name
                    }
                    onMouseEnter={() =>
                      setHoveredSpeaker({
                        name: speaker.name,
                        position: "top",
                      })
                    }
                    onMouseLeave={() => setHoveredSpeaker(null)}
                    onClick={() =>
                      hoveredSpeaker?.name === speaker.name
                        ? setHoveredSpeaker(null)
                        : setHoveredSpeaker({
                            name: speaker.name,
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
                {speakers.map((speaker) => (
                  <Speakercard
                    key={speaker.name}
                    name={speaker.name}
                    img={speaker.img}
                    isHovered={
                      hoveredSpeaker?.position === "bottom" &&
                      hoveredSpeaker?.name === speaker.name
                    }
                    onMouseEnter={() =>
                      setHoveredSpeaker({
                        name: speaker.name,
                        position: "bottom",
                      })
                    }
                    onMouseLeave={() => setHoveredSpeaker(null)}
                    onClick={() =>
                      hoveredSpeaker?.name === speaker.name
                        ? setHoveredSpeaker(null)
                        : setHoveredSpeaker({
                            name: speaker.name,
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
                {speakers.map((speaker) => (
                  <Speakercard
                    key={speaker.name}
                    name={speaker.name}
                    img={speaker.img}
                    isHovered={
                      hoveredSpeaker?.position === "bottom" &&
                      hoveredSpeaker?.name === speaker.name
                    }
                    onMouseEnter={() =>
                      setHoveredSpeaker({
                        name: speaker.name,
                        position: "bottom",
                      })
                    }
                    onMouseLeave={() => setHoveredSpeaker(null)}
                    onClick={() =>
                      hoveredSpeaker?.name === speaker.name
                        ? setHoveredSpeaker(null)
                        : setHoveredSpeaker({
                            name: speaker.name,
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
    name: "Akmal 1",
    img: "/img/speaker-akmal-1.png",
  },
  {
    name: "Akmal 2",
    img: "/img/speaker-akmal-1.png",
  },
  {
    name: "Akmal 3",
    img: "/img/speaker-akmal-1.png",
  },
  {
    name: "Akmal 4",
    img: "/img/speaker-akmal-1.png",
  },
  {
    name: "Akmal 5",
    img: "/img/speaker-akmal-1.png",
  },
  {
    name: "Akmal 6",
    img: "/img/speaker-akmal-1.png",
  },
  {
    name: "Akmal 7",
    img: "/img/speaker-akmal-1.png",
  },
  {
    name: "Akmal 8",
    img: "/img/speaker-akmal-1.png",
  },
];
