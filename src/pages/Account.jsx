import { motion } from "framer-motion";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useEffect } from "react";
import { handleUser } from "../api/handleUser";
import avatar from "../assets/avatar.png";

export const Account = () => {
  const [account, setAccount] = useState([]);
  const token = Cookies.get("token");
  // useEffect(() => {
  //   handleUser(setAccount, token);
  // }, []);
  console.log(token);
  console.log(account);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="App"
    >
      <main className=" text-5xl text-center justify-center mt-28 text-white">
        <h1>Keep track of your musical journey</h1>

        <div className="container flex text-center justify-center mt-5">
          <div className="avatar w-96 h-96">
            <img src={avatar} alt="avatar" />

            <h4>FullName</h4>
          </div>
        </div>
      </main>
    </motion.div>
  );
};
