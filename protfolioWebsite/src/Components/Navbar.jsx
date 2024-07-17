import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import pic from "../assets/navbarPic.png";
import ThemeBtn from "./ThemeBtn";
import { Link } from "react-scroll";
import { useId } from "react";

function Navbar() {
  const navItems = [
    {
      id: useId(),
      name: "Home",
    },
    {
      id: useId(),
      name: "About",
    },
    {
      id: useId(),
      name: "Projects",
    },

    {
      id: useId(),
      name: "Contact",
    },
  ];

  const [menu, setMenu] = useState(true);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 h-auto  md:px-20 shadow-md fixed top-0  dark:bg-gray-800   text-gray-900 dark:text-white bg-white z-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <h1 className="font-semibold tex-xl cursor-pointer">
              Adity<span className="text-orange-500 text-xl">a</span> Rajawa
              <span className="text-orange-500 text-xl">t</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>

          <div>
            <ul className="hidden md:flex space-x-8 ">
              {navItems.map(({ id, name }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={name}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {name}
                  </Link>
                </li>
              ))}

              <li className=" hover:scale-105 duration-200 cursor-pointer">
                <ThemeBtn />
              </li>
            </ul>
            <div
              className="md:hidden flex justify-end gap-2"
              onClick={() => setMenu(!menu)}
            >
              {menu ? <IoMenu size={24} /> : <IoClose size={24} />}
              <ThemeBtn />
            </div>
          </div>
        </div>
        {!menu && (
          <div>
            <ul className="md:hidden flex flex-col h-screen items-center justify-center text-xl gap-2 bg-white ">
              {navItems.map(({ id, name }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={name}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
