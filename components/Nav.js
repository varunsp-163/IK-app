"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@public/assests/Logo.svg";
import "@styles/globals.css";
import "@styles/nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="fixed top-0 z-[999px] gap-5 flex py-6 px-10 w-full justify-between items-center bg-[#fff] shadow-nav">
      <Link href="/" id="mobile-logo" className="flex">
        <Image src={logo} alt="logo" width={30} height={30} />
        <p className=" font-semibold text-lg logo-text text-black tracking-wide">
          IK Developers
        </p>
      </Link>

      <div
        id={clicked ? "links-active" : "links"}
        className={
          clicked ? "" : "flex text-[#4A5568] p-[10px] justify-start gap-8"
        }
      >
        <Link href="/">About Us</Link>

        <Link href="/">Services</Link>

        <Link href="/">Case Studies</Link>

        <Link href="/">Blog</Link>

        <Link href="/">How it Works</Link>

        <Link href="/">Hire</Link>
        <Link href="/">Contact us</Link>
      </div>
      {!clicked && (
        <button
          id="mobile-btn"
          className="text-white font-inter text-[14px] font-semibold"
          style={{
            padding: "14px 25px",
            borderRadius: "5px",
            background: "linear-gradient(225deg, #6675F7 0%, #57007B 100%)",

            alignItems: "center",
          }}
        >
          Contact Us
        </button>
      )}

      <div className="w-4 p-4" id="mobile">
        <button onClick={clickHandler}>
          <FontAwesomeIcon icon={clicked ? faX : faBars} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
