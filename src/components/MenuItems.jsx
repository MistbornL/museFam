import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
const MenuItems = ({ showMenu, token, active, navItems }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-50 overflow-y-auto"
      initial={{ x: "-100%" }}
      animate={{ x: active ? 0 : "-100%" }}
      transition={{ ease: "easeInOut" }}
    >
      <div className="bg-black h-full w-full fixed top-0 left-0">
        <div className="px-5 py-5">
          <ul className="text-xl text-white gap-8">
            <li className="hover:scale-150 transition-transform px-3 py-3 ">
              <Link to={`/`}>Home</Link>
            </li>
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className="hover:scale-150 transition-transform px-3 py-3 "
                >
                  <Link to={`/${item}`}>{item}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="px-5">
          <div className="w-full flex justify-end text-xl gap-10 px-5">
            {token ? (
              <Link
                onClick={() => {
                  Cookies.remove("token");
                  console.log(Cookies("token"));
                }}
                to={"/"}
              >
                Logout
              </Link>
            ) : (
              <>
                <Link to={"/signIn"}>Sign In</Link>
                <Link to={"/signUp"}>Sign Up</Link>
              </>
            )}
          </div>
        </div>
        <div className="fixed top-0 right-0 p-5">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={showMenu}
            color="white"
            className="cursor-pointer"
          />
        </div>
      </div>
    </motion.div>
  );
};
export default MenuItems;
