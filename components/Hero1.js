"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import hero1 from "@public/assests/web-development 1.png";
import Cards from "./Cards";
import "@styles/nav.css";

const Hero1 = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Delay the activation to ensure the image is in the initial position
    setTimeout(() => {
      setIsActive(true);
    }, 100);
  }, []);

  return (
    <div className=" md:justify-center md:items-center m-2 pb-9 pt-6 my-6">
      <div className="lg:flex md:max-sm:flex-col justify-between gap-9 pt-4 px-9 mx-9">
        <div className="md:flex md:flex-col md:items-start gap-6 mr-9 md:gap-10 pb-6 mb-6 md:text-left">
          <div className="text-gray-900 font-inter text-3xl md:text-4xl lg:text-5xl font-light leading-tight mt-9 max-w-2xl pr-6 md:pr-0">
            <p>
              Great{" "}
              <span className="bg-gradient-to-r product-font from-pink-600 via-transparent to-transparent text-transparent bg-clip-text font-inter text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Product
              </span>{" "}
              is{" "}
              <span className="text-gray-900 font-inter text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                built by great
              </span>{" "}
              <span className="team-font bg-gradient-to-br from-red-500 via-blue-600 to-transparent text-transparent bg-clip-text font-inter text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                teams
              </span>
            </p>
            <p className="text-gray-700 font-inter text-lg md:text-xl lg:text-2xl font-normal leading-normal md:leading-tight max-w-xs md:max-w-none mt-4">
              We help build and manage a team of world-class developers to bring
              your vision to life
            </p>
          </div>
          <div className="mt-8">
            <button className="flex p-4 md:p-6 px-6 md:px-10 justify-center items-center gap-2 md:gap-4 rounded-md bg-blue-600 text-white shadow-btn text-lg md:text-xl">
              Let's get started!
            </button>
          </div>
        </div>
        <div className="md:relative">
          <div
            className={`image-slide-in ${isActive ? "active" : ""}`}
            style={{
              animation: isActive ? "wobble 1s infinite alternate" : "none",
            }}
          >
            <Image
              src={hero1}
              alt="logo"
              width={614}
              height={546}
              className={`image-slide-in ${isActive ? "active" : ""}`}
            />
          </div>
        </div>
      </div>

      {/* Slider part */}
      <div className="pt-9 my-9 py-8">
        <div className="text-gray-900 mb-8 bg-[#F9F9FF] font-inter text-3xl md:text-4xl lg:text-5xl font-bold py-8 md:py-8 lg:py-10">
          <p className="text-gray-900 font-inter text-center text-3xl md:text-4xl lg:text-5xl m-8 font-bold leading-tight">
            Services we offer
          </p>
          <div className="pt-9 pb-9 mb-9">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
