import React from "react";
import img from "../Assets/Images/restaurantImage.webp";
import LoginButtonsHeader from "./LoginButtonsHeader";
import { FaExternalLinkAlt } from "react-icons/fa";
import Blob from "./Blob";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="dark:bg-stone-900 bg-bg_special grid relative grid-cols-12 grid-rows-12 w-full h-screen overflow-x-hidden">
        <Blob align="left" />
        <div className="col-start-1 sm:ml-4 xxxs:ml-2  xxxs:max-sm:col-span-full row-start-3 row-span-3 z-30 xxxs:max-sm:row-start-3 xs:max-sm:backdrop-blur-xxs sm:max-lg:col-span-8 lg:col-span-7">
          <h1 className="sm:max-md:text-5xl leading-none dark:text-wheat font-blacker_cond_med lg:text-6xl md:text-5.5xl xl:text-7xl xxxs:text-white  sm:text-stone-800 2xl:text-8xl text-6.5xl xxxs:max-sm:w-min">
            A pinch of passion in every{" "}
            <span className="text-nowrap xxxs:text-white sm:text-stone-800 dark:text-wheat">
              {" "}
              dish
              <button className="sm:hidden inline text-orangered ">
                <FaExternalLinkAlt
                  aria-hidden="true"
                  onClick={() => {
                    navigate("/menu");
                  }}
                  className="text-3xl ml-5 inline  backdrop-blur-sm "
                />
              </button>
            </span>
          </h1>
          <p className="min-[675px]:max-lg:block xxs:mt-3 font-montserrat_med hidden text-md text-stone-500 dark:text-stone-400">
            online service for booking dinner reservations, have fun!
          </p>
        </div>
        <div className="col-start-9 xs:max-sm:col-start-9 xs:max-sm:row-start-11 sm:py-2 col-span-4 sm:row-start-3 sm:flex flex-col justify-between row-span-3 z-10 xxxs:max-sm:col-start-1 xxxs:max-sm:col-span-full hidden sm:max-lg:col-start-10 sm:mr-customML lg:py-3">
          <p className="lg:leading-snug lg:text-base xl:text-lg  2xl:text-xl 2xl:mt-2 font-montserrat_med text-stone-500 mr-1 dark:text-stone-400 hidden lg:block">
            we serve as a service for booking dinner reservations, our goal is
            to keep the operation as simple and enjoyable as possible
          </p>
          <LoginButtonsHeader />
        </div>

        <img
          src={img}
          alt="a picture taken inside the restaurant"
          fetchpriority="high"
          className="w-full mx-auto sm:px-3 sm:max-h-fit h-full object-cover block col-start-1 col-span-full sm:row-start-7 row-span-full sm:rounded-t-5xl xxxs:row-start-1 xxxs:max-sm:brightness-overlay z-10"
        />
      </section>
    </>
  );
};

export default HeroSection;
