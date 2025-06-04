// components/PageTransition.js
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    x: 100, // start from right
  },
  in: {
    opacity: 1,
    x: 0, // slide to center
  },
  out: {
    opacity: 0,
    x: -100, // slide out to left
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
};

const PageTransition = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

export default PageTransition;
