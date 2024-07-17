import React from "react";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 py-5  md:px-20  shadow-lg h-auto  dark:bg-gray-800   text-gray-900 dark:text-white  bg-white"
    >
      <h1 className="text-4xl">About Me</h1>
      <p className="text-xl py-2">
        With a strong foundation in computer science and hands-on experience in
        various programming languages and frameworks, I have honed my skills in
        building dynamic, user-friendly web applications. My journey in tech has
        equipped me with a versatile skill set, including:
      </p>
      <div className="py-4">
        <h2 className="text-2xl">Technical Specifications:</h2>
        <div className="flex justify-evenly flex-wrap py-3">
          <FaJava className="w-40 h-40" />
          <IoLogoJavascript className="w-40 h-40" />
          <FaHtml5 className="w-40 h-40" />
          <SiTailwindcss className="w-40 h-40" />
          <RiReactjsLine className="w-40 h-40" />
        </div>
        <div className="py-4">
          <h2 className="text-2xl">Education Qualification:</h2>
          <div className="flex justify-between py-2 font-bold ">
            <p>
              The NorthCap University, Gurgaon
              <br />
              Bachelor of Technology in Computer Science
            </p>
            <p>2017-2022</p>
          </div>
          <div className="flex justify-between py-2 font-bold ">
            <p>
              Birla Public School, Pilani <br />
              Class XII
            </p>
            <p>2017</p>
          </div>
          <div className="flex justify-between py-2 font-bold ">
            <p>
              Birla Public School, Pilani <br />
              Class X
            </p>
            <p>2015</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
