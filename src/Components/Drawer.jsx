import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";

import { NavLink, useNavigate } from "react-router-dom";
import { BsX } from "react-icons/bs";
import DarkModeToggleBtn from "./DarkModeToggleBtn";

const Drawer = ({ drawerRef }) => {
  const navigate = useNavigate();
  return (
    <nav ref={drawerRef} className="drawer backdrop-blur-md">
      {" "}
      <div className="absolute top-5 right-5 flex gap-4">
        <DarkModeToggleBtn flag={false} />
        <button
          onClick={() => {
            drawerRef.current.classList.toggle("responsiveDrawer");
          }}
        >
          <BsX aria-hidden="true" className="text-neutral-300 text-3xl" />
        </button>
      </div>
      <div className="flex flex-col relative top-[4.3rem] left-5 -translate-y-1/2  w-fit h-fit">
        <button
          onClick={() => {
            navigate("/reservation");
          }}
          className="text-orangered font-montserrat_black text-md flex items-center gap-2 group my-7 z-20"
        >
          Book Now{" "}
          <FaArrowUpRightFromSquare
            aria-hidden="true"
            className="text-vs group-hover:text-sm transition-all duration-200"
          />
        </button>

        <ul className="flex flex-col">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive
                  ? "hidden"
                  : "text-white font-Josefin_bold text-lg flex gap-1 items-center";
              }}
            >
              Home <BsArrowUpRight aria-hidden="true" className="text-sm" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) => {
                return isActive
                  ? "hidden"
                  : "text-white font-Josefin_bold text-lg flex gap-1 items-center";
              }}
            >
              Menu <BsArrowUpRight aria-hidden="true" className="text-sm" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                return isActive
                  ? "hidden"
                  : "text-white font-Josefin_bold text-lg flex gap-1 items-center";
              }}
            >
              Contact <BsArrowUpRight aria-hidden="true" className="text-sm" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Drawer;
