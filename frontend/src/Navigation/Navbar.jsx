import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "../components/MenuItems";

export const Navbar = () => {
  const [active, setActive] = useState(false);
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
    <div className=" w-full text-white flex justify-center p-4 items-center">
      <h1 className="text-4xl ">MuseFam</h1>

      <nav>
        <div className="absolute right-6 md:hidden top-6 scale-150">
          {/* <FontAwesomeIcon
            icon={"fa-xmark"}
            onClick={showMenu}
            className="scale-150 cursor-pointer"
          /> */}
        </div>

        <ul className="hidden text-2xl md:flex gap-8 p-6  ">
          {navItems.map((item, index) => {
            return (
              <li
                key={index}
                style={{ borderRadius: "5px" }}
                className=" hover:scale-150 transition-transform px-3 py-3 "
              >
                <Link to={item === "home" ? `/` : `/${item}`}>{item}</Link>
              </li>
            );
          })}
        </ul>

        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};
