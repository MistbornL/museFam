import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className="md:flex justify-between items-center w-full text-white ">
      <div className=" px-4 text-4xl">
        <h1 className="4xl">MuseFam</h1>
      </div>

      <nav className="">
        <div className="absolute right-6 md:hidden top-6 scale-150">
          <MenuOutlined
            onClick={showMenu}
            className="scale-150 cursor-pointer"
          />
        </div>

        <ul className="md:flex text-2xl gap-8 p-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Information</Link>
          </li>
          <li>
            <Link to="/">Account</Link>
          </li>
          <li>
            <Link to="/">Blogs</Link>
          </li>
          <li>
            <Link to="/">Find</Link>
          </li>
          <li>
            <Link to="/">Upload</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
