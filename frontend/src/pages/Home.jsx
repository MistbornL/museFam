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
      <main className="flex  justify-center items-center text-center  mt-40  ">
        {!token ? (
          <div className="container  ">
            <h1 className=" text-5xl">Landing Page</h1>
            <p className=" w-80 mt-7">
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
        ) : (
          <div className="container w-144 ">
            <h1 className="text-white text-5xl">Take Survey</h1>
            <p className="text-white flex mt-7 text-2xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              exercitationem libero iusto similique, facere minima veniam iste
              quasi accusamus quo porro ducimus aspernatur. Illo corrupti amet,
              autem nihil dolor sit?
            </p>

            <button
              onClick={() => navigate("/survey")}
              className="bg-white  rounded-lg md:w-40 mt-7 h-10 mix-blend-screen"
            >
              Quiz
            </button>
          </div>
        )}
      </main>
    </motion.div>
  );
};
