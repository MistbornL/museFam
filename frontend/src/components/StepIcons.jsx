import React from "react";

export const StepIcons = ({ page, name, index }) => {
  return (
    <li
      className={
        page === index ? "bg-blue-300 w-2/6 rounded-lg  " : "bg: transparent"
      }
    >
      <div className="flex items-center ">
        <span className="stepper-head-icon">
          <svg
            className="h-8 w-8 text-blue-200"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="12" y1="12" x2="12" y2="12.01" />
            <path
              d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
              transform="rotate(45 12 12)"
            />
            <path
              d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
              transform="rotate(-45 12 12)"
            />
          </svg>
        </span>
        <span
          className={
            page === index
              ? "ml-2 text-white font-medium"
              : "ml-2 text-blue-300 cursor-pointer"
          }
        >
          {name}
        </span>
      </div>
    </li>
  );
};
