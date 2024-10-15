import React from "react";
import { useSelector } from "react-redux";

import { BsCurrencyDollar } from "react-icons/bs";

const Menu = ({ err, isLoading }) => {
  const { menuItems, filterCategory, filterName } = useSelector(
    (state) => state.menuOp
  );

  return isLoading ? (
    <div className="min-[1180px]:col-start-4 md:col-start-5 col-span-full flex flex-col items-center gap-2 mt-20  h-[1000px]">
      <h1 className=" text-center xxxs:2xl xs:text-4xl opacity-45 font-montserrat_black">
        Loading Menu...
      </h1>
    </div>
  ) : (
    <ul className="lg:col-start-4 md:max-lg:col-start-5 col-span-full gap-y-4 xxs:p-4 xxxs:p-2 py-4  dark:bg-[#312d2c] counter grid grid-cols-[40px_1fr_auto] content-start xl:mt-10">
      {menuItems
        ?.filter((dish) => {
          return (
            dish.type.toLowerCase().includes(filterCategory.toLowerCase()) &&
            dish.dish_name.toLowerCase().includes(filterName.toLowerCase())
          );
        })
        .map((dish, i) => {
          return (
            <li
              key={dish.id}
              className=" bg-[#cfcbc8]  dark:bg-stone-900 rounded-md shadow-lighterDarkShadow dark:shadow-none pr-2 col-span-full grid grid-cols-subgrid h-fit py-2"
            >
              <span className="text-lg font-blacker_cond_med dark:text-stone-400 text-stone-700 col-start-1 flex items-center justify-center">
                {i + 1}
              </span>
              <div className="flex justify-center p-2 flex-col col-start-2">
                <h2
                  className={`lg:text-2xl md:text-lg min-[850px]:text-xl font-Josefin_bold text-stone-800 dark:text-wheat`}
                >
                  {dish.dish_name}
                </h2>
                <p
                  className={`text-sm ml-1 font-Josefin_bold  ${
                    dish.type === "main"
                      ? "text-red-700 dark:text-red-600"
                      : dish.type === "starter"
                      ? "text-yellow-600 dark:text-yellow-600"
                      : dish.type === "dessert"
                      ? "text-orange-600 dark:text-orange-500"
                      : "text-pink-500 dark:text-pink-400"
                  }`}
                >
                  {dish.type}
                </p>
              </div>

              <span className="lg:text-xl  md:text-lg font-blacker_cond_med text-red-600 flex items-center col-start-3">
                {dish.price.toFixed(2)}{" "}
                <sub>
                  {" "}
                  <BsCurrencyDollar className="lg:text-lg md:text-base" />
                </sub>
              </span>
            </li>
          );
        })}
      {err && (
        <p className="xxxs:max-xs:col-span-full xs:col-span-2 text-red-600 dark:text-red-500 mt-10 text-center font-Josefin_Regular">
          An error has occured, please refresh the page
        </p>
      )}
    </ul>
  );
};

export default Menu;
