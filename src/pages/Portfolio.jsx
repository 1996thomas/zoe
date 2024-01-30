import React from "react";
import Test from "../components/Sections/Test";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Portfolio() {
  const transition = { duration: 0.2, ease: "linear", delay: 1.05 };
  const location = useLocation();

  return (
    <motion.div
    >
      <Test />
    </motion.div>
  );
}
