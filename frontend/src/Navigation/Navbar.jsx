import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="md:flex justify-between items-center w-full text-white ">
      <div className="text-4xl">
        <h1 className="4xl">MuseFam</h1>
      </div>

      <nav className="">
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
