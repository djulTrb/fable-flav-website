import React, { useRef } from "react";
import logo from "../Assets/Images/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Drawer from "./Drawer";

import DarkModeToggleBtn from "./DarkModeToggleBtn";

const Header = () => {
  const navigate = useNavigate();
  const drawerRef = useRef();
  return (
    <>
      <header
        className={`xs:px-16 xxxs:px-5 py-3 flex justify-between z-50 items-center fixed left-0 top-0 w-full xl:left-1/2 xl:-translate-x-1/2 xl:py-5 xxxs:max-sm:backdrop-blur-xs xxxs:max-sm:backdrop-brightness-overlay backdrop-blur-bsm max-w-[1580px]`}
      >
        <figure
          className="w-auto h-auto xl:w-24 xxxs:w-14 xs:w-16 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src={logo}
            alt="restaurant's temporary logo placeholder"
            className="w-full h-full block"
          />
        </figure>

        <nav className="flex items-center justify-center">
          <button
            aria-label="open drawer"
            className="md:hidden relative"
            onClick={() => {
              drawerRef.current.classList.toggle("responsiveDrawer");
            }}
          >
            <FaBars
              aria-hidden="true"
              className="text-xl xxxs:text-orangered xxxs:dark:text-orangered sm:text-neutral-900 sm:dark:text-orangered"
            />
          </button>
          <ul className="hidden md:flex justify-between space-x-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive
                    ? " hidden"
                    : "flex justify-start font-blacker_cond_med text-lg lg:text-xl xl:text-2xl text-stone-700 dark:text-wheat ";
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) => {
                  return isActive
                    ? " hidden"
                    : "flex justify-start font-blacker_cond_med text-lg lg:text-xl xl:text-2xl text-stone-700 dark:text-wheat ";
                }}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive
                    ? "hidden"
                    : "flex justify-start font-blacker_cond_med text-lg lg:text-xl xl:text-2xl text-stone-700 dark:text-wheat";
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <DarkModeToggleBtn flag={true} />
      </header>
      <Drawer drawerRef={drawerRef} />
    </>
  );
};

export default Header;
