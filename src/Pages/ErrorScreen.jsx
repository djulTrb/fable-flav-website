import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ErrorScreen = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <div className="h-screen w-full flex items-start justify-center">
        <div className="w-fit flex flex-col items-center">
          <h1 className="xxs:text-14xl xxxs:max-xxs:text-10xl text-opacity-70 font-montserrat_It_black text-stone-800">
            404
          </h1>
          <p className="text-xl font-Josefin_bold text-gray-600">
            Page not found
          </p>
          <NavLink
            to={"/"}
            className="text-blue-700 underline decoration-2 font-Josefin_Regular"
          >
            Go back to home
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ErrorScreen;
