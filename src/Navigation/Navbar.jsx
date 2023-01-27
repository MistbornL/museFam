import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faB, faBars } from "@fortawesome/free-solid-svg-icons";
import MenuItems from "../components/MenuItems";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const navItems = ["testimonials", "information", "jobs", "about", "contact"];

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className=" text-white flex justify-center p-4 items-center">
      <nav className="absolute bg-black rounded-4xl justify-end flex items-center  ">
        <div className=" right-6 md:hidden top-6 scale-150">
          <FontAwesomeIcon
            icon={faBars}
            onClick={showMenu}
            color="white"
            className="cursor-pointer"
          />
        </div>
        <Link
          to={"/"}
          className="hidden md:flex text-2xl text-gray-light items-center ml-5 mr-3 mb-1"
        >
          MuseFam
        </Link>

        <ul className=" md:flex hidden text-xl gap-8 p-3 items-center">
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
          <div className=" w-96 flex justify-end text-xl gap-10 px-5">
            {Cookies.get("token") ? (
              <>
                <Link to={"/account"}>Account</Link>
                <Link onClick={() => Cookies.remove("token")} to={"/"}>
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to={"/signIn"}>Sign In</Link>
                <Link to={"/signUp"}>Sign Up</Link>
              </>
            )}
          </div>
        </ul>

        <MenuItems
          setActive={setActive}
          showMenu={showMenu}
          active={active}
          navItems={navItems}
        />
      </nav>
    </div>
  );
};
