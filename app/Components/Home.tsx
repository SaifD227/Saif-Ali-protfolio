"use client";
import Image from "next/image";
import React, { useState } from "react";
import image from "../assets/f6587f411031a412ca7f2a98ed54c15c (1).jpg";
import Solution from "./Solution";
import Service from "./Service";
import photo from "../assets/Screenshot (44).png";
import Contact from "./Contact";
import Blog from "./Blog";
import Footer from "./Footer";
import Link from "next/link";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-white shadow-md">
        <div className="flex items-center justify-between mx-5 md:mx-20 mt-5">
          <div>
            <Image src={image} alt="Logo" width={100} height={40} />
          </div>
          <div className="block md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <nav
            className={`md:flex items-center space-x-6 ${
              isMenuOpen ? "block" : "hidden"
            } md:block`}
          >
            <ul className="flex flex-col md:flex-row gap-6 md:gap-10 font-bold text-[#878484f0] md:space-x-6">
              <li className="hover:text-orange-500">
                <Link href="#Home">Home</Link>
              </li>
              <li className="hover:text-orange-500">
                <Link href="#About">About</Link>
              </li>
              <li className="hover:text-orange-500">
                <Link href="#Service">Service</Link>
              </li>
             
              <li className="hover:text-orange-500">
                <Link href="#Blog">Blog</Link>
              </li>
              <li className="hover:text-orange-500">
                <Link href="#Contact">Contact us</Link>
              </li>
            </ul>
            <div className="md:hidden mt-4">
              <button className="font-bold text-[#878484f0] hover:text-orange-500">
                Sign up
              </button>
            </div>
          </nav>
          <div className="hidden md:block font-bold text-[white]">
            <Image
              className="rounded-full object-cover"
              src={photo}
              alt="image"
              width={30}
            />
          </div>
        </div>
      </header>
      <div id="Home"><Solution /></div>
      <div id="Service"><Service /></div>
      <div id="Blog"><Blog /></div>
      <div id="Contact"><Contact /></div>
      <Footer />
    </div>
  );
};

export default Home;
