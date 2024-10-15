import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCertificate } from "react-icons/fa6";

import { setFilterCategory, setFilterName } from "../store/menuOpSlice";

const TopFilter = () => {
  const { filterCategory } = useSelector((state) => state.menuOp);

  const dispatch = useDispatch();

  return (
    <div className="block md:hidden mt-20 col-span-full">
      <form className="flex gap-1 w-full px-2 xxs:px-[10%] sm:px-[15%]">
        <label
          htmlFor="SearchInput"
          className=" text-base font-montserrat_black dark:text-gray-100 text-gray-800 self-end"
        >
          Search
        </label>
        <input
          type="text"
          id="SearchInput"
          placeholder="eg. gyoza"
          onChange={(e) => {
            dispatch(setFilterName(e.target.value));
          }}
          className="bg-bg_special rounded-3xl w-full border-2 border-stone-700 p-1 font-Josefin_Regular px-2 focus:outline-none dark:placeholder:text-gray-600 placeholder:text-gray-400"
        />
      </form>
      <ul className="flex flex-wrap justify-center gap-1 mt-4 xs:mt-6 xxs:gap-2 xs:gap-3">
        <li
          className={`${
            filterCategory === ""
              ? "font-Josefin_bold  text-red-700 duration-0 transition-colors"
              : "font-Josefin_Regular  dark:text-gray-300 text-gray-800 duration-0 transition-colors"
          }`}
        >
          <button
            onClick={() => {
              dispatch(setFilterCategory(""));
            }}
            className="flex items-center gap-1 xxs:gap-2 xs:gap-3"
          >
            All{" "}
            <FaCertificate
              aria-hidden="true"
              className="text-[0.35rem] text-zinc-800 dark:text-gray-500"
            />
          </button>
        </li>
        <li
          className={`${
            filterCategory === "starter"
              ? "font-Josefin_bold  text-red-700 duration-0 transition-colors"
              : "font-Josefin_Regular  dark:text-gray-300 text-gray-800 duration-0 transition-colors"
          }`}
        >
          <button
            onClick={() => {
              dispatch(setFilterCategory("starter"));
            }}
            className="flex items-center gap-1 xxs:gap-2 xs:gap-3"
          >
            Starter{" "}
            <FaCertificate
              aria-hidden="true"
              className="text-[0.35rem] text-zinc-800 dark:text-gray-500"
            />
          </button>
        </li>
        <li
          className={`${
            filterCategory === "main"
              ? "font-Josefin_bold  text-red-700 duration-0 transition-colors"
              : "font-Josefin_Regular  dark:text-gray-300 text-gray-800 duration-0 transition-colors"
          }`}
        >
          <button
            onClick={() => {
              dispatch(setFilterCategory("main"));
            }}
            className="flex items-center gap-1 xxs:gap-2 xs:gap-3"
          >
            Main Course{" "}
            <FaCertificate
              aria-hidden="true"
              className="text-[0.35rem] text-zinc-800 dark:text-gray-500"
            />
          </button>
        </li>
        <li
          className={`${
            filterCategory === "dessert"
              ? "font-Josefin_bold  text-red-700 duration-0 transition-colors"
              : "font-Josefin_Regular  dark:text-gray-300 text-gray-800 duration-0 transition-colors"
          }`}
        >
          <button
            onClick={() => {
              dispatch(setFilterCategory("dessert"));
            }}
            className="flex items-center gap-1 xxs:gap-2 xs:gap-3"
          >
            Dessert{" "}
            <FaCertificate
              aria-hidden="true"
              className="text-[0.35rem] text-zinc-800 dark:text-gray-500"
            />
          </button>
        </li>
        <li
          className={`${
            filterCategory === "drink"
              ? "font-Josefin_bold text-red-700 duration-0 transition-colors"
              : "font-Josefin_Regular  dark:text-gray-300 text-gray-800 duration-0 transition-colors"
          }`}
        >
          <button
            onClick={() => {
              dispatch(setFilterCategory("drink"));
            }}
            className="flex items-center gap-1 xxs:gap-2 xs:gap-3"
          >
            Drink{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TopFilter;
