import { motion } from "framer-motion";
import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navigation/Navbar";

export const Home = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="App"
    >
      <main className=" main flex  justify-center items-center text-center  mt-40  ">
        {!token ? (
          <div className="container w-144 ">
            <h1 className="text-white text-5xl">Welcome to Musefam</h1>
            <p className="text-white flex mt-7 text-2xl">
              Welcome to our musical community! We are a platform dedicated to
              connecting and empowering musicians from all backgrounds and skill
              levels. Whether you're a seasoned pro or just starting out, we
              have something for you.
            </p>
            <button
              onClick={() => navigate("/signUp")}
              className="text-white dive rounded-lg bg w-40 mt-7 h-10 mix-blend-screen"
            >
              Dive In
            </button>
          </div>
        ) : (
          <div className="container w-144 ">
            <h1 className="text-white text-5xl">Take Survey</h1>
            <p className="text-white flex mt-7 text-2xl">
              Our survey is designed to help you find your place in the
              community by identifying your strengths and interests as a
              musician. Based on your answers, you will be assigned to one of
              four fractions: The Visionaries, The Harmonizers, The Performers,
              or The Analyzers. Each fraction represents a different approach to
              making music and has its own unique resources and opportunities.
            </p>

            <button
              onClick={() => navigate("/survey")}
              className="dive text-white rounded-lg w-40 mt-7 h-10 mix-blend-screen"
            >
              Quiz
            </button>
          </div>
        )}
      </main>
    </motion.div>
  );
};
