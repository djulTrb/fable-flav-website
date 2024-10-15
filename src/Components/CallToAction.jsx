import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useNavigate } from "react-router";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section className="dark:bg-stone-900 bg-bg_special flex items-center justify-center pb-20 pt-6 xxxs:max-sm:px-1 ">
      <div className=" bg-stone-800 dark:bg-stone-900 sm:w-10/12  flex flex-col gap-16 items-center pt-14 pb-10 px-perc8 rounded-3xl  dark:shadow-none shadow-CTAShadowLight xxxs:w-full xxxs:max-sm:rounded-2xl">
        <p className="text-2xl font-Josefin_Regular text-gray-300 text-center xxxs:max-sm:text-xl">
          Reserve your table now and savor an exquisite menu just for your
          liking. Don't miss out on your perfect evening
        </p>
        <button
          onClick={() => {
            navigate("/reservation");
          }}
          className="dark:text-stone-900 flex justify-center items-center gap-2 font-montserrat_black bg-wheat text-stone-900 px-20 py-3 shadow-glassShadowDark rounded-xl"
        >
          Book Now{" "}
          <FaArrowUpRightFromSquare aria-hidden="true" className="text-md" />
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
