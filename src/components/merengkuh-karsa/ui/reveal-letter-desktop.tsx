import { motion, useTransform, MotionValue } from "framer-motion";

interface IRevealLetterDesktop {
  char: string;
  index: number;
  totalChars: number;
  scrollYProgress: MotionValue<number>;
}

const RevealLetterDesktop = ({
  char,
  index,
  totalChars,
  scrollYProgress,
}: IRevealLetterDesktop) => {
  const start = index / totalChars;
  const end = (index + 1) / totalChars;

  const opacity = useTransform(
    scrollYProgress,
    [0.4 + start * 0.32, 0.4 + end * 0.32],
    [0.2, 1],
  );

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char}
    </motion.span>
  );
};

export default RevealLetterDesktop;
