import React from "react";
import person1 from "../Assets/Images/people/person1.svg";
import person2 from "../Assets/Images/people/person2.svg";
import person3 from "../Assets/Images/people/person3.svg";
import { BsStarFill } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialsSection = () => {
  return (
    <section className="dark:bg-stone-900 bg-stone-300 h-fit xxxs:py-4 xxxs:max-sm:pb-12 xxxs:gap-8 sm:py-16 p-2 flex flex-col sm:gap-14">
      <h1 className="font-soria text-center text-stone-900 dark:text-wheat xxxs:max-sm:text-5.5xl sm:text-6xl lg:text-7xl xxxs:mt-4">
        Testimonials
      </h1>
      <ul className="xxxs:mt-8 xs:px-perc8 md:px-perc4 xxxs:flex flex-col xxxs:gap-12 md:gap-8 xxxs:max-md:items-center md:grid md:grid-cols-4 grid-rows-3 lg:grid-cols-7 xl:w-percent80 xl:mx-auto">
        <li className="flex flex-col gap-3 xs:max-sm:w-percent95 sm:max-md:w-percent80 lg:w-percent90 xl:w-percent95 md:col-span-2 md:row-span-1 lg:col-span-4">
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-3">
              <figure className="w-14 aspect-square rounded-full p-0.5 flex justify-center items-center dark:bg-wheat">
                <img
                  alt="two dimentional icon of a person as a profile picture"
                  src={person1}
                  className="block h-full w-full"
                />
              </figure>
              <div className="flex flex-col">
                <p className="text-stone-800 dark:text-wheat font-saira_con_bold text-nowrap">
                  Olivia Johnson
                </p>
                <span className="text-stone-600 dark:text-stone-400 text-sm font-saira_con_bold_extra">
                  @liv_loves_food
                </span>
              </div>
            </div>
            <p className="flex gap-0.5 items-center xxxs:max-xs:ml-6 xxxs:self-center lg:self-start">
              {[...Array(5)].map((star, i) => {
                return (
                  <BsStarFill className="text-amber-500 xs:text-lg " key={i} />
                );
              })}
              <span className="text-vs text-stone-600 dark:text-stone-400 mt-1">
                /5
              </span>
            </p>
          </div>

          <p className="text-stone-600 dark:text-stone-300 font-Josefin_Regular leading-5 ml-6">
            <span>
              <FaQuoteLeft className="inline text-lg dark:text-wheat mr-2 text-gray-800" />
            </span>
            Easy reservation and real-time availability made my dinner at Fable
            Flav'{" "}
            <span className="text-nowrap">
              unforgettable.
              <FaQuoteRight className="inline text-lg dark:text-wheat ml-2 text-gray-800" />
            </span>
          </p>
        </li>

        <li className="flex flex-col gap-3 xs:max-sm:w-percent95 sm:max-md:w-percent80 lg:w-percent90 xl:w-percent95 md:col-start-2 md:row-start-2 md:col-span-2 md:row-span-1 lg:col-span-4 lg:col-start-4">
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-3">
              <figure className="w-14 aspect-square rounded-full p-0.5 flex justify-center items-center dark:bg-wheat">
                <img
                  alt="two dimentional icon of a person as a profile picture"
                  src={person2}
                  className="block h-full w-full"
                />
              </figure>
              <div className="flex flex-col">
                <p className="text-stone-800 dark:text-wheat font-saira_con_bold text-nowrap">
                  David Wilson
                </p>
                <span className="text-stone-600 dark:text-stone-400 text-sm font-saira_con_bold_extra">
                  @dave_eats_out
                </span>
              </div>
            </div>
            <p className="flex gap-0.5 items-center xxxs:max-xs:ml-6 xxxs:self-center lg:self-start">
              {[...Array(5)].map((star, i) => {
                return (
                  <BsStarFill className="text-amber-500 xs:text-lg" key={i} />
                );
              })}
              <span className="text-vs text-stone-600 dark:text-stone-400 mt-1">
                /5
              </span>
            </p>
          </div>

          <p className="text-stone-600 dark:text-stone-300 font-Josefin_Regular leading-4 ml-6">
            <FaQuoteLeft className="inline text-lg dark:text-wheat mr-2 text-gray-800" />
            Planning large group dinners is easy! The restaurant staff were very
            <span className="text-nowrap">
              {" "}
              accommodating.
              <FaQuoteRight className="inline text-lg dark:text-wheat ml-2 text-gray-800" />
            </span>
          </p>
        </li>

        <li className="flex flex-col gap-3 xs:max-sm:w-percent95 sm:max-md:w-percent80 lg:w-percent90 xl:w-percent95 md:col-start-3 md:row-start-3 md:col-span-2 md:row-span-1 lg:col-span-4 lg:col-start-1">
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-3">
              <figure className="w-14 aspect-square rounded-full p-0.5 flex justify-center items-center dark:bg-wheat">
                <img
                  alt="two dimentional icon of a person as a profile picture"
                  src={person3}
                  className="block h-full w-full"
                />
              </figure>
              <div className="flex flex-col">
                <p className="text-stone-800 dark:text-wheat font-saira_con_bold text-nowrap">
                  Michael Lee
                </p>
                <span className="text-stone-600 dark:text-stone-400 text-sm font-saira_con_bold_extra">
                  @mlee_dining
                </span>
              </div>
            </div>

            <p className="flex gap-0.5 items-center xxxs:max-xs:ml-6 xxxs:self-center lg:self-start">
              {[...Array(5)].map((star, i) => {
                return (
                  <BsStarFill className="text-amber-500  xs:text-lg" key={i} />
                );
              })}
              <span className="text-vs text-stone-600 dark:text-stone-400 mt-1">
                /5
              </span>
            </p>
          </div>

          <p className="text-stone-600 dark:text-stone-300 font-Josefin_Regular leading-4 ml-4">
            <FaQuoteLeft className="inline text-lg dark:text-wheat mr-2 text-gray-800" />
            User-friendly! Loved browsing menus before booking at Fable{" "}
            <span className="text-nowrap">
              Flav'
              <FaQuoteRight className="inline text-lg dark:text-wheat ml-2 text-gray-800" />
            </span>
          </p>
        </li>
      </ul>
    </section>
  );
};

export default TestimonialsSection;
