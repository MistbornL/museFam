import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navigation/Navbar";

export const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

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
      <main className="flex justify-end mt-40  md:mr-40">
        <div className="container  ">
          <h1 className="text-white text-5xl">Landing Page</h1>
          <p className="text-white w-80 mt-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            exercitationem libero iusto similique, facere minima veniam iste
            quasi accusamus quo porro ducimus aspernatur. Illo corrupti amet,
            autem nihil dolor sit?
          </p>

          <button
            onClick={() => navigate("/signUp")}
            className="bg-white  rounded-lg md:w-40 mt-7 h-10 mix-blend-screen"
          >
            Dive In
          </button>
        </div>
      </main>
    </motion.div>
  );
};
