import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FaSun, FaMoon } from "react-icons/fa6";
import { toggleDarkMode } from "../store/darkMode";

const DarkModeToggleBtn = ({ flag }) => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.darkMode);

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDark = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <button
      className={`${isDarkMode ? "shadow-whiteShadow" : "shadow-darkShadow"} ${
        flag ? "hidden md:block" : ""
      } p-1 rounded-lg bg-white`}
      onClick={toggleDark}
    >
      <span className="sr-only">
        {isDarkMode
          ? "sun icon to toggle light mode"
          : "moon icon to toggle dark mode"}
      </span>
      {isDarkMode ? (
        <FaSun
          aria-hidden="true"
          className="text-2xl text-amber-500 drop-shadow-cus"
        />
      ) : (
        <FaMoon
          aria-hidden="true"
          className="text-2xl text-slate-800 drop-shadow-cus"
        />
      )}
    </button>
  );
};

export default DarkModeToggleBtn;
