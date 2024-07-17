import React from "react";
import todoApp from "../assets/todoApp.png";
import megaBlog from "../assets/megaBlog.png";
import pass from "../assets/passwordGenerator.png";

function Projects() {
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 py-5  md:px-20  shadow-lg h-auto  dark:bg-gray-800   text-gray-900 dark:text-white  bg-white"
    >
      <h1 className="text-4xl">Projects</h1>
      <div className="flex justify-evenly flex-wrap">
        <div className="max-w-sm rounded overflow-hidden shadow-lg py-4">
          <img
            className="w-full h-60"
            src={megaBlog}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Blog Project</div>
            <p className="text-gray-700 text-base  dark:text-white">
              My blog project is a modern, responsive web application built
              using ReactJS. It serves as a platform for sharing articles,
              tutorials, and insights on various topics, showcasing my expertise
              in frontend development and my passion for writing.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <li>Dynamic Content Management</li>
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <li>User Authentication</li>
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <li>Rich Text Editor</li>
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg py-4">
          <img
            className="w-full h-60"
            src={todoApp}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Todo App</div>
            <p className="text-gray-700 text-base  dark:text-white">
              The To-Do List application is a simple yet powerful task
              management tool built using ReactJS. It helps users organize their
              tasks efficiently by providing an intuitive interface to add,
              manage, and track their to-dos.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <li>Task Management</li>
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <li>Persistent Storage</li>
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <li>User-Friendly Interface</li>
            </span>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg py-4">
          <img
            className="w-full h-60"
            src={pass}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ">Password Generator</div>
            <p className="text-gray-700 text-base  dark:text-white">
              The Random Password Generator is a handy tool built with ReactJS,
              designed to create secure and random passwords. It offers users
              the ability to customize their password requirements, ensuring
              strong and unique passwords for enhanced security.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <li>Customizable Options</li>
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <li>Real-Time Preview</li>
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <li>Copy to Clipboard</li>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
