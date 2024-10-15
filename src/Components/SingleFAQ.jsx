import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const SingleFAQ = ({ question, answer }) => {
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerOpen(!isAnswerOpen);
  };
  return (
    <li className="rounded-md py-2 xxxs:px-2 xs:px-5 w-full">
      <button
        onClick={toggleAnswer}
        className="px-1 py-2 w-full flex text-left justify-between items-center gap-2 "
      >
        <p className="font-saira_con_bold xxxs:max-xs:text-sm sm:text-lg  dark:text-gray-100">
          {question}
        </p>
        <span className="dark:text-gray-300  text-stone-700">
          {isAnswerOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      <div
        className={`${
          isAnswerOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        } overflow-hidden grid transition-all ease-in-out duration-300 `}
      >
        <p
          className={`font-Josefin_Regular xxxs:text-vs xs:text-base overflow-hidden dark:text-gray-300 text-gray-600 pl-4 pr-10
          }`}
        >
          {answer}
        </p>
      </div>
    </li>
  );
};

export default SingleFAQ;
