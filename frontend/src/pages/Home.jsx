import { motion } from "framer-motion";
import React from "react";
import { Navbar } from "../Navigation/Navbar";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="App"
    >
      <header>
        <Navbar />
      </header>
      <main></main>
    </motion.div>
  );
};
