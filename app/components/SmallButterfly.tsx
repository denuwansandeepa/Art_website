"use client";

import { motion } from "framer-motion";

export type SmallButterflyProps = {
  delay: number;
  top: string;
  size: number;
  duration: number;
};

const SmallButterfly = ({
  delay,
  top,
  size,
  duration,
}: SmallButterflyProps) => {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="absolute pointer-events-none"
      style={{ top, width: size, height: size }}
      fill="none"
      initial={{ x: "110vw", opacity: 0 }}
      animate={{ x: "-15vw", opacity: [0, 1, 1, 0] }}
      transition={{
        delay,
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        animate={{ scaleX: [1, 0.85, 1] }}
        transition={{ duration: 0.45, repeat: Infinity }}
      >
        <path
          d="M100 100 C50 70, 50 130, 100 150"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M100 100 C150 70, 150 130, 100 150"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>

      <path
        d="M100 80 L100 160"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default SmallButterfly;
