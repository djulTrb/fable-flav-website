import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

import { setFilterCategory, setFilterName } from "../store/menuOpSlice";
import { useNavigate } from "react-router";

const AsideFilter = () => {
  const { filterCategory } = useSelector((state) => state.menuOp);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <aside className="hidden md:block lg:col-span-3 md:col-span-4 bg-[#b5afac] p-3 dark:bg-gradient-to-b from-stone-800 to-stone-900 xl:mt-10">
      <div className="p-4 flex flex-col gap-8 ">
        <form className="flex flex-col gap-1">
          <label
            htmlFor="SearchInput"
            className=" text-lg font-montserrat_black dark:text-gray-100 text-gray-800 "
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
            className="bg-bg_special rounded-3xl border-2 border-stone-700 p-1 font-Josefin_Regular px-2 focus:outline-none dark:placeholder:text-gray-600 placeholder:text-gray-400"
          />
        </form>
        <div className="flex flex-col gap-4">
          <h3 className="font-montserrat_black text-lg dark:text-gray-100 text-gray-800">
            navigate through
          </h3>
          <nav className="ml-4">
            <ul className="flex flex-col gap-1.5">
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
                >
                  All
                </button>
              </li>
              <li
                className={`${
                  filterCategory === "starter"
                    ? "font-Josefin_bold  text-yellow-600 duration-0 transition-colors"
                    : "font-Josefin_Regular  dark:text-gray-300 text-gray-800 duration-0 transition-colors"
                }`}
              >
                <button
                  onClick={() => {
                    dispatch(setFilterCategory("starter"));
                  }}
                >
                  Starters
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
                >
                  Main Course
                </button>
              </li>
              <li
                className={`${
                  filterCategory === "dessert"
                    ? "font-Josefin_bold  text-orange-600 duration-0 transition-colors"
                    : "font-Josefin_Regular  dark:text-gray-300 text-gray-800 duration-0 transition-colors"
                }`}
              >
                <button
                  onClick={() => {
                    dispatch(setFilterCategory("dessert"));
                  }}
                >
                  Dessert
                </button>
              </li>
              <li
                className={`${
                  filterCategory === "drink"
                    ? "font-Josefin_bold text-pink-500 duration-0 transition-colors"
                    : "font-Josefin_Regular  dark:text-gray-300 text-gray-800 duration-0 transition-colors"
                }`}
              >
                <button
                  onClick={() => {
                    dispatch(setFilterCategory("drink"));
                  }}
                >
                  Drinks
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bg-stone-800 dark:bg-wheat flex flex-col items-center p-4 pt-5 rounded-2xl gap-6 mt-5">
          <p className="font-Josefin_Regular text-center text-gray-300 dark:text-gray-800">
            You can book now in only few steps
          </p>
          <button
            onClick={() => {
              navigate("/reservation");
            }}
            className="bg-wheat text-stone-800 dark:text-wheat dark:bg-stone-900 rounded-lg px-5 py-1.5 font-montserrat_black text-md flex items-center gap-2 group"
          >
            Book Now{" "}
            <FaArrowUpRightFromSquare
              aria-hidden="true"
              className="text-vs group-hover:text-sm transition-all duration-200"
            />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AsideFilter;
