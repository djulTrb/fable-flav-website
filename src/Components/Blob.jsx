import React from "react";
import { useSelector } from "react-redux";

const Blob = ({ align }) => {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  return (
    <div
      className={`${
        align === "left"
          ? !isDarkMode
            ? "blob_left"
            : "blob_left_dark"
          : align === "right"
          ? !isDarkMode
            ? "blob_right"
            : "blob_right_dark"
          : !isDarkMode
          ? "blob_center"
          : "blob_center_dark"
      }`}
    ></div>
  );
};

export default Blob;
