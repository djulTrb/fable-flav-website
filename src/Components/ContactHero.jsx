import React from "react";

const ContactHero = () => {
  return (
    <div className=" xxxs:max-sm:min-h-[15rem] sm:min-h-[23rem] lg:min-h-[18rem] flex-col flex justify-end bg-bg_special dark:bg-stone-900">
      <h1 className="text-center xxxs:text-5.5xl min-[390px]:text-6xl min-[390px]:max-sm:mb-3 xxs:text-7xl sm:text-8.5xl xl:text-10xl xs:text-7.5xl  text-stone-700 dark:text-wheat  font-montserrat_black overflow-hidden">
        Chat to Us
      </h1>
      <p className="text-center font-montserrat_med dark:text-gray-300 text-stone-700 xxxs:text-vs xxxs:px-3 xxxs:leading-relaxed sm:text-base sm:mt-3 ">
        feel free to ask for our{" "}
        <span className="dark:text-violet-800 text-violet-950 bg-violet-400  dark:bg-violet-300 font-montserrat_sb rounded-3xl px-2 py-0.5 opacity-70">
          #Help
        </span>{" "}
        or ask any{" "}
        <span className="text-orangered bg-orange-200 font-montserrat_sb rounded-3xl px-2 py-0.5 dark:opacity-90 opacity-70">
          #question
        </span>
      </p>
    </div>
  );
};

export default ContactHero;
