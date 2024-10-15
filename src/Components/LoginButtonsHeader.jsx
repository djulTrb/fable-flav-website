import React from "react";
import { useNavigate } from "react-router";
import { BsArrowUpRight } from "react-icons/bs";

const LoginButtonsHeader = () => {
  const navigate = useNavigate();
  return (
    <button
      className="text-orangered backdrop-blur-sm flex items-center hover:gap-[0.6rem] duration-300 transition-all gap-2 font-blacker_cond_med text-3xl w-fit sm:max-md:text-2xl sm:max-md:mt-1 sm:max-md:ml-customML"
      onClick={() => {
        navigate("/menu");
      }}
    >
      Explore
      <span
        aria-hidden="true"
        className="text-orangered text-xl sm:max-md:text-lg"
      >
        <BsArrowUpRight />
      </span>
    </button>
  );
};

export default LoginButtonsHeader;
