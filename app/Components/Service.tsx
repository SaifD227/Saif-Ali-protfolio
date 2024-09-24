import React from "react";
import { FaReact, FaServer, FaCode, FaTools } from "react-icons/fa";

const Service = () => {
  return (
    <div className="px-5 md:px-10 mt-20">
      <h1 className=" md:text-4xl  text-center mb-6 text-5xl font-bold text-orange-500 ">
        We Provide The Best Services
      </h1>
      <div className=" text-center mb-12 text-gray-600 text-lg">
        <p>We offer exceptional front-end development with React.js,</p>
        <p>
          Next.js, and TypeScript for dynamic, high-performance, and robust
          solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-2 bg-white shadow-lg rounded-lg flex items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="bg-blue-100 p-4 rounded-full text-4xl text-blue-500 mr-4">
            <FaReact />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-orange-500">React.js</h2>
            <p className="text-base md:text-lg text-gray-600">
              Build dynamic and interactive UIs with reusable components.
            </p>
          </div>
        </div>
        <div className="p-2 bg-white shadow-lg rounded-lg flex items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="bg-green-100 p-4 rounded-full text-4xl text-green-500 mr-4">
            <FaServer />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-orange-500">Next.js</h2>
            <p className="text-base md:text-lg text-gray-600">
              Optimize performance with server-side rendering and static site
              generation.
            </p>
          </div>
        </div>
        <div className="p-2 bg-white shadow-lg rounded-lg flex items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="bg-yellow-100 p-4 rounded-full text-4xl text-yellow-500 mr-4">
            <FaCode />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-orange-500">TypeScript</h2>
            <p className="text-base md:text-lg text-gray-600">
              Enhance code quality and maintainability with strong typing and
              error checking.
            </p>
          </div>
        </div>
        <div className="p-2 bg-white shadow-lg rounded-lg flex items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="bg-red-100 p-4 rounded-full text-4xl text-red-500 mr-4">
            <FaTools />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-orange-500">Custom Solutions</h2>
            <p className="text-base md:text-lg text-gray-600">
              Deliver tailored front-end solutions to meet your unique business
              needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
