import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "../components/MenuItems";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const token = localStorage.getItem("token");
  const navItems = [
    "home",
    "testimonials",
    "information",
    "jobs",
    "about",
    "contact",
  ];

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="w-full text-white flex justify-center px-4 items-center">
      <nav className="bg-black rounded-4xl justify-end flex items-center">
        <div className="absolute right-6 md:hidden top-6 scale-150">
          {/* <FontAwesomeIcon
            icon={"fa-xmark"}
            onClick={showMenu}
            className="scale-150 cursor-pointer"
          /> */}
        </div>

        <ul className=" hidden text-2xl md:flex gap-8 p-6  items-center">
          <Link to={"/"} className="text-4xl ">
            MuseFam
          </Link>
          {navItems.map((item, index) => {
            return (
              <li
                key={index}
                style={{ borderRadius: "5px" }}
                className=" text-gray-light hover:scale-150 transition-transform px-3 py-3 "
              >
                <Link to={`/${item}`}>{item}</Link>
              </li>
            );
          })}
        </ul>

        <div className="w-96 flex justify-end text-xl gap-10 px-5">
          {token ? (
            <Link onClick={() => localStorage.clear()} to={"/"}>
              Logout
            </Link>
          ) : (
            <>
              {" "}
              <Link to={"/signUp"}>Sign Up</Link>
              <Link to={"/signIn"}>Sign In</Link>
            </>
          )}
        </div>

        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};
