import React from "react";
import { motion } from "framer-motion";
import HomeList from "../components/HomeList/HomeList";

export default function Home() {
  const transition = { duration: 1, ease: [0, 1, 1, 0.21], delay: 1 };

  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition}
    >
      <>
        <HomeList />
      </>
    </motion.div>
  );
}
