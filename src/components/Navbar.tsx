import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsBookmarkHeartFill } from "react-icons/bs";
const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center px-2 w-full h-20  text-white bg-gradient-to-r from-violet-400  to-violet-500 fixed shadow-md">
      <div>
        <h1 className="text-3xl font-sans font-bold ml-2">
          <Link to="/">
            <div className="flex">
              <span className="mx-4">Bookers</span>
              <BsBookmarkHeartFill />
            </div>
          </Link>
        </h1>
      </div>
      <div>
        <ul className="hidden md:flex h-full items-center">
          <li className="nav-links px-4 capitalize font-medium text-gray-100 hover:scale-105 hover:text-white duration-200 link-underline text-left">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-links px-4 capitalize font-medium text-gray-100 hover:scale-105 hover:text-white duration-200 link-underline text-left">
            <Link to="/events">Eventos</Link>
          </li>
          <li className="nav-links px-4 capitalize font-medium text-gray-100 hover:scale-105 hover:text-white duration-200 link-underline text-left">
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-100 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col mt-[80px] justify-top items-left absolute top-0 left-0 w-full h-[400px] bg-gradient-to-r from-violet-400 to-violet-500">
          <li className="mx-4 capitalize py-6 text-xl text-gray-100 hover:text-white duration-200 link-underline text-left">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4  capitalize py-6 text-xl text-gray-100 hover:text-white duration-200 link-underline text-left">
            <Link to="/events">Eventos</Link>
          </li>
          <li className="mx-4  capitalize py-6 text-xl text-gray-100 hover:text-white duration-200 link-underline text-left">
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
