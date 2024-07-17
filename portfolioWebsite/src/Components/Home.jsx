import React from "react";
import pic from "../assets/navbarPic.png";
import { FaGithub } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { FaLinkedin } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiGmail } from "react-icons/si";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 py-20  md:px-20  shadow-lg h-auto  dark:bg-gray-800   text-gray-900 dark:text-white  bg-white   "
      >
        <div className="flex flex-col md:flex-row  ">
          <div className="md:w-1/2 mt-10">
            <span className="text-4xl">welcome to my portfolio website!</span>
            <h1 className="text-2xl">
              Hello, I,m a &nbsp;
              {/* <span className="text-orange-600">Developer </span> */}
              <ReactTyped
                className="text-orange-600"
                strings={["Developer", "Coder", "Programmer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </h1>
            <br />

            <p className="text-xl">
              passionate and dedicated software developer with expertise in web
              development, backend services, and database management. My work is
              driven by a love for technology and a desire to create innovative
              solutions that make a difference.
            </p>

            <div className="flex text-sm justify-between py-5 ">
              <div className="w-1/2">
                <strong>Available on</strong>
                <div className="flex gap-3 w-full">
                  <FaGithub className="w-5 h-5" />

                  <FaLinkedin className="w-5 h-5" />
                  <SiGmail className="w-5 h-5" />
                </div>
              </div>
              <div>
                <strong>Currently Working on </strong>
                <div className="flex gap-3 w-full">
                  <RiReactjsLine className="w-5 h-5" />
                  <IoLogoNodejs className="w-5 h-5" />
                  <SiMongodb className="w-5 h-5" />
                  <SiNextdotjs className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 px-60">
            <img src={pic} alt="profile pic" className="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
