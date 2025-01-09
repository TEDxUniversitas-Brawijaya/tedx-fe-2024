import { motion, MotionValue, useTransform } from "framer-motion";

interface IRevealTextDesktop {
  text: string;
  className?: string;
  progress: MotionValue<number>;
}

const RevealTextDesktop = ({
  text,
  className,
  progress,
}: IRevealTextDesktop) => {
  const words = text.split(" ").map((word) => word.split(""));
  const totalChars = text.length;
  const step = 1 / totalChars;

  let charCount = 0;

  return (
    <p className={className}>
      {words.map((characters, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {characters.map((char) => {
            const opacity = useTransform(
              progress,
              [charCount * step, (charCount + 1) * step],
              [0.2, 1],
            );
            charCount++;

            return (
              <motion.span
                key={charCount}
                style={{ opacity }}
                className="inline-block"
              >
                {char}
              </motion.span>
            );
          })}
          {/* Add space between words */}
          {wordIndex < words.length - 1 && (
            <motion.span
              style={{
                opacity: useTransform(
                  progress,
                  [charCount * step, (charCount + 1) * step],
                  [0.2, 1],
                ),
              }}
              className="inline-block"
            >
              &nbsp;
            </motion.span>
          )}
        </span>
      ))}
    </p>
  );
};

export default RevealTextDesktop;
