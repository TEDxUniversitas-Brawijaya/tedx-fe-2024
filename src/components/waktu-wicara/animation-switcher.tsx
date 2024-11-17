import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IAnimationSwitcher {
  beforeContent: React.ReactNode;
  afterContent: React.ReactNode;
  isAnimating: boolean;
}

const AnimationSwitcher = ({
  beforeContent,
  afterContent,
  isAnimating,
}: IAnimationSwitcher) => {
  return (
    <AnimatePresence mode="wait">
      {!isAnimating ? (
        <motion.div
          key="before"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5 }}
        >
          {beforeContent}
        </motion.div>
      ) : (
        <motion.div
          key="after"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {afterContent}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimationSwitcher;
