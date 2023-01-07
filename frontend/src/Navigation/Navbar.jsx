import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "../components/MenuItems";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className=" w-full text-white flex justify-between p-4 items-center">
      <div className="text-2xl font-bold text-center uppercase">
        <h1>MuseFam</h1>
      </div>

      <nav>
        <div className="absolute right-6 md:hidden top-6 scale-150">
          {/* <FontAwesomeIcon
            icon={"fa-xmark"}
            onClick={showMenu}
            className="scale-150 cursor-pointer"
          /> */}
        </div>

        <ul className="hidden md:flex gap-8 p-6 uppercase bg-white/10">
          <li
            style={{ borderRadius: "5px" }}
            className="hover:bg-gray-dark px-3 py-3 "
          >
            <Link className="text-white" to="/">
              Home
            </Link>
          </li>
          <li
            className="hover:bg-gray-dark px-3 py-3"
            style={{ borderRadius: "5px" }}
          >
            <Link className="text-white" to="/">
              Testimonials
            </Link>
          </li>
          <li
            style={{ borderRadius: "5px" }}
            className="text-white hover:bg-gray-dark px-3 py-3"
          >
            <Link to="/">Information</Link>
          </li>
          <li
            style={{ borderRadius: "5px" }}
            className="text-white hover:bg-gray-dark px-3 py-3"
          >
            <Link to="/">Jobs</Link>
          </li>
          <li
            style={{ borderRadius: "5px" }}
            className="text-white hover:bg-gray-dark px-3 py-3"
          >
            <Link to="/">About</Link>
          </li>
          <li
            style={{ borderRadius: "5px" }}
            className="text-white hover:bg-gray-dark px-3 py-3"
          >
            <Link to="/">Contact</Link>
          </li>
        </ul>

        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};
