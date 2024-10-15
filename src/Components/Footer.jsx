import React from "react";
import { FaBehance, FaFacebookF } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { BsArrowUpRight, BsInstagram, BsCCircle } from "react-icons/bs";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className="bg-stone-900 dark:bg-gradient-to-b from-stone-900 to-black h-fit p-4 relative sm:pt-8 flex flex-col lg:gap-16 md:gap-4">
      <div className="grid xxxs:grid-rows-2  xxxs:grid-cols-2 md:grid-rows-1 md:grid-cols-3 gap-3 p-2 mb-6 items-end">
        <nav className="xxs:col-span-1 xxs:row-span-1">
          <ul className=" flex flex-col md:gap-2 sm:pl-5 xxxs:max-md:items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive
                    ? "hidden"
                    : "font-blacker_cond_med flex items-center gap-1 text-gray-200 text-xl sm:text-2xl md:text-3xl";
                }}
              >
                Home{" "}
                <BsArrowUpRight className="text-orangered text-vs md:text-lg" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) => {
                  return isActive
                    ? "hidden"
                    : "font-blacker_cond_med flex items-center gap-1 text-gray-200 text-xl sm:text-2xl md:text-3xl";
                }}
              >
                Menu{" "}
                <BsArrowUpRight className="text-orangered text-vs md:text-lg" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive
                    ? "hidden"
                    : "font-blacker_cond_med flex items-center gap-1 text-gray-200 text-xl sm:text-2xl md:text-3xl";
                }}
              >
                Contact{" "}
                <BsArrowUpRight className="text-orangered text-vs md:text-lg" />
              </NavLink>
            </li>
          </ul>
        </nav>

        <nav className="xxxs:col-start-2 xxxs:col-span-1 xxxs:row-span-1">
          <ul className="flex gap-1.5 flex-col items-start justify-end sm:max-md:items-center">
            <li>
              <a
                href=""
                className="flex items-center xxxs:max-xs:text-vs md:text-sm gap-2 text-gray-300 font-Josefin_bold"
              >
                <FaFacebookF className="text-blue-600 md:text-2xl xs:text-xl xxxs:text-lg" />{" "}
                @Fable Flav'
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center gap-2 text-gray-300 xxxs:max-xs:text-vs xs:text-base md:text-sm font-Josefin_bold"
              >
                <BsInstagram className="text-rose-600 md:text-2xl xs:text-xl xxxs:text-lg" />{" "}
                @Fable Flav' Off
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center gap-2 text-gray-300 xxxs:max-xs:text-vs  md:text-sm font-Josefin_bold"
              >
                <FaBehance className="text-gray-400 md:text-2xl xs:text-xl xxxs:text-lg" />{" "}
                @Fable Flav' Art
              </a>
            </li>
          </ul>
        </nav>
        <p className="text-gray-400 leading-4 text-vs font-Josefin_Regular text-center xxxs:max-md:pb-4 md:pb-1.5 xxxs:max-sm:mt-5 sm:max-md:w-percent80  xxxs:col-span-2 xxxs:row-span-1 md:text-left mx-auto md:col-start-3 md:col-span-1 md:row-start-1">
          <span className="font-Josefin_Regular">
            <BsCCircle className="inline-block mb-1" />
          </span>{" "}
          {year} Fable Flav'. All rights reserved. No part of this website may
          be used, modified, or distributed without prior written permission
          from the copyright owner.
        </p>
      </div>

      <h1 className="min-[1300px]:text-16xl xl:text-14xl min-[1150px]:text-13xl lg:text-12xl min-[820px]:text-9xl min-[780px]:text-8.5xl min-[685px]:text-8.25xl sm:text-8xl min-[590px]:text-7.5xl xs:text-7xl  min-[450px]:text-6.5xl min-[420px]:text-6xl min-[380px]:text-5.5xl xxxs:text-5xl text-wheat font-montserrat_It_black text-center">
        Fable Flav'
      </h1>
    </footer>
  );
};

export default Footer;
