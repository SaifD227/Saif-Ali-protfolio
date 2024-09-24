
import Image from "next/image";
import React from "react";
import image1 from '../assets/download (4).jpeg';

const Solution = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-20 px-5 md:px-10 h-100vh ">
      <div className="md:w-1/2 p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          We Create <span className="text-orange-500">Solutions</span> for Front-End Development
        </h1>
        <p className="text-lg md:text-xl mb-6">
          With React.js, you can build interactive UIs using reusable components, while Next.js offers enhanced performance with server-side rendering. TypeScript ensures type safety, improving code quality and maintainability.
        </p>
        <div className="flex justify-start">
          <button className="px-6 py-3 md:px-8 md:py-4 rounded-lg bg-orange-500 text-white font-semibold text-lg transition duration-300 ease-in-out transform hover:bg-orange-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
            Get Started
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <Image src={image1} width={500} height={500} alt="Solution Image" className="object-cover"/>
      </div>
    </div>
  );
};

export default Solution;
