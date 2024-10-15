import React from "react";

import dark_hourglass from "../Assets/Images/3D_Icons/Clock_dark.webp";
import light_hourglass from "../Assets/Images/3D_Icons/Clock_light.webp";
import computer from "../Assets/Images/3D_Icons/Notebook.webp";
import light_credit_card from "../Assets/Images/3D_Icons/card-dynamic-color.webp";
import dark_credit_card from "../Assets/Images/3D_Icons/card-dynamic-premium.webp";
import Blob from "./Blob";

import { useSelector } from "react-redux";

const FeaturesSection = () => {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  return (
    <section className="dark:bg-stone-900 bg-bg_special h-fit w-full sm:px-3 relative">
      <Blob align="right" />
      <div className="xxxs:h-108 xxxs:max-sm:pb-10 sm:h-96 w-full grid xxxs:rounded-b-3xl xxxs:grid-cols-12 xxxs:grid-rows-12 xxxs:justify-items-center dark:bg-gr2 bg-gr">
        <h1 className="font-soria text-stone-900 dark:text-wheat xxxs:max-lg:col-start-1 lg:col-start-1 xxxs:max-sm:text-5xl sm:text-6xl lg:text-7xl xxxs:max-lg:mt-5 xxxs:max-lg:col-span-full lg:col-end-7  xxxs:max-lg:items-center xxxs:row-start-1 xxxs:max-xs:row-span-2 xxxs:max-lg:content-end lg:content-center xxxs:mt-3 lg:row-end-7">
          What We Provide
        </h1>

        <ul className="col-span-full row-span-full w-full rounded-b-4xl  xxxs:max-lg:row-start-4 xxxs:max-md:gap-4 xxxs:max-lg:col-start-1 xxxs:max-lg:flex flex-col items-center xxxs:justify-center sm:justify-start sm:mb-3 xxxs:max-xxs:px-4 min-[400px]:max-xs:px-14 md:grid md:grid-cols-11 md:grid-rows-2 xs:max-md:w-4/6 md:gap-5 lg:gap-2 lg:grid-rows-12 lg:row-start-1">
          <li className="w-full relative shadow-lighterDarkShadow bg-gr xxxs:p-2 md:px-1 xxxs:h-20 xxs:h-22 sm:h-24 md:h-5/6 rounded-b-xl rounded-t-md overflow-hidden md:col-start-4 md:col-span-5 md:row-span-1 lg:row-start-3 lg:col-start-7 lg:col-span-4 lg:row-span-4 lg:h-5/6 glassmorphism">
            <figure>
              <div className="w-3/4 space-y-1 px-1">
                <figcaption className="text-lg dark:text-gray-100 text-stone-900 font-blacker_cond_med md:text-nowrap md:text-xl z-10 relative">
                  Instant Confirmation
                </figcaption>
                <p className="xxxs:px-2 xxxs:text-sm md:text-base text-opacity-85 md:leading-5 xxs:leading-none xxs:px-4 xxxs:leading-3 text-stone-700 dark:text-stone-400 font-Josefin_Regular z-10 relative">
                  Book Now, and get instant booking confirmation email
                </p>
              </div>
              <img
                alt="three dimentional icon of an hourglass"
                fetchpriority="low"
                src={isDarkMode ? light_hourglass : dark_hourglass}
                className="absolute xxxs:right-1 xs:right-2 top-1/2  -translate-y-1/2 xxxs:z-10  xxxs:w-12 h-auto block min-[450px]:w-14 md:z-0 md:w-[4.7rem] xl:w-24 md:max-lg:-right-4 md:rotate-45 lg:-right-4"
              />
            </figure>
          </li>
          <li className="w-full relative shadow-lighterDarkShadow bg-gr xxxs:p-2 md:px-1 xxxs:h-20 xxs:h-22 sm:h-24 md:h-5/6 rounded-b-xl rounded-t-md overflow-hidden md:col-span-4 md:row-start-2 md:col-start-7 md:row-span-1 lg:row-start-7 lg:col-start-2 lg:col-span-4 lg:row-span-4 lg:h-5/6 glassmorphism">
            <figure>
              <div className="w-3/4 space-y-1 px-1">
                <figcaption className="text-lg dark:text-gray-100 text-stone-900 font-blacker_cond_med md:text-nowrap md:text-xl z-10 relative">
                  User Friendly Interface
                </figcaption>
                <p className="xxxs:px-2 xxxs:text-sm md:text-base text-opacity-85 md:leading-5 xxs:text-sm xxs:leading-none xxs:px-4 xxxs:leading-3 text-stone-700 dark:text-stone-400  font-Josefin_Regular z-10 relative">
                  easily navigate our platform in no more than few clicks
                </p>
              </div>
              <img
                alt="three dimentional icon of a computer"
                fetchpriority="low"
                src={computer}
                className="absolute xxxs:right-1 xs:right-2 top-1/2 -translate-y-1/2 xxxs:z-10 md:z-0 xxxs:w-16 h-auto block min-[450px]:w-20 md:w-24 xl:w-28 md:rotate-12 md:max-lg:-right-4 lg:-right-4"
              />
            </figure>
          </li>
          <li className="w-full relative shadow-lighterDarkShadow  min-[400px]:max-[400px]:p-1 xxxs:p-2 md:px-1 xxxs:h-20 xxs:h-22 sm:h-24 md:h-5/6 rounded-b-xl rounded-t-md overflow-hidden xs:col-start-3 md:col-span-4 md:row-start-2 md:col-start-2 md:row-span-1 lg:row-start-7  lg:col-start-7 lg:col-span-4 lg:row-span-4 lg:h-5/6 glassmorphism">
            <figure>
              <div className="w-3/4 space-y-1 px-1">
                <figcaption className="z-10 dark:text-gray-100 text-stone-900 relative text-lg font-blacker_cond_med md:text-nowrap md:text-xl">
                  Easy-going Transactions
                </figcaption>
                <p className="xxxs:px-2 xxxs:text-sm md:text-base text-opacity-85  md:leading-5 xxs:leading-none xxs:px-4 xxxs:leading-3 text-stone-700 dark:text-stone-400 font-Josefin_Regular z-10 relative">
                  easy transactions and support for the largest banks
                </p>
              </div>
              <img
                alt="three dimentional icon of a credit card"
                fetchpriority="low"
                src={isDarkMode ? light_credit_card : dark_credit_card}
                className="absolute xxxs:right-1 xs:right-2  top-1/2  -translate-y-1/2 xxxs:z-10 md:z-0 xxxs:w-16 h-auto block min-[450px]:w-20 md:w-24 xl:w-[7.25rem] md:rotate-12 md:max-lg:-right-6 xl:-right-5"
              />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;
