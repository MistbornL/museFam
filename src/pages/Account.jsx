import { motion } from "framer-motion";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useEffect } from "react";
import { handleUser } from "../api/handleUser";
import avatar from "../assets/avatar.png";

export const Account = () => {
  const [account, setAccount] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
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