import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function About() {
  const transition = { duration: 0.2, ease: "linear", delay: 1.05 };
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition}
    >
      <div style={{ backgroundColor: "blue", height: "100vh" }}>About</div>
    </motion.div>
  );
}
