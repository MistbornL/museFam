import { motion } from "framer-motion";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleUser } from "../api/handleUser";
import avatar from "../assets/avatar.png";

export const Account = () => {
  const [account, setAccount] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = Cookies.get("token");

  useEffect(() => {
    document.body.classList.add("account");
    if (!token) {
      navigate("/");
    }

    setLoading(true);
    handleUser(setAccount);
    setLoading(false);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="App"
    >
      {loading ? (
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <main className=" text-5xl text-center justify-center mt-10 text-white">
          <h1>Keep track of your musical journey</h1>

          <div className="container flex text-center justify-center mt-5">
            <div className="avatar w-72 h-72">
              <img src={avatar} alt="avatar" />

              <h4 className="text-2xl mt-3">{account.username}</h4>
            </div>
          </div>
        </main>
      )}
    </motion.div>
  );
};
