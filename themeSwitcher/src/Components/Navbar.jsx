import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import pic from "../assets/navbarPic.png";

function Navbar() {
  const [menu, setMenu] = useState(true);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 h-16  md:px-20 shadow-md fixed top-0 left-0 right-0 dark:bg-gray-800   dark:text-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} alt="logo" className="h-12 w-12 rounded-full"></img>
            <h1 className="font-semibold tex-xl cursor-pointer">
              Adity<span className="text-green-500 text-xl">a</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>

          <div>
            <ul className="hidden md:flex space-x-8 ">
              <li className="hover:scale-105 duration-200 cursor-pointer">
                Home
              </li>
              <li className="hover:scale-105 duration-200 cursor-pointer">
                About
              </li>
              <li className="hover:scale-105 duration-200 cursor-pointer">
                Portfolio
              </li>
              <li className="hover:scale-105 duration-200 cursor-pointer">
                Experience
              </li>
              <li className="hover:scale-105 duration-200 cursor-pointer">
                Contact
              </li>
              <li className=" hover:scale-105 duration-200 cursor-pointer"></li>
            </ul>
            <div
              className="md:hidden flex justify-end gap-2"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <IoMenu size={24} /> : <IoClose size={24} />}
            </div>
          </div>
        </div>
        {!menu && (
          <div>
            <ul className="md:hidden flex flex-col h-screen items-center justify-center text-xl gap-2 bg-white ">
              <li className=" hover:scale-105 duration-200 cursor-pointer">
                Home
              </li>
              <li className=" hover:scale-105 duration-200 cursor-pointer">
                About
              </li>
              <li className=" hover:scale-105 duration-200 cursor-pointer">
                Portfolio
              </li>
              <li className=" hover:scale-105 duration-200 cursor-pointer">
                Experience
              </li>
              <li className=" hover:scale-105 duration-200 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
