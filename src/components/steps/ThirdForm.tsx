import React from "react";
import { Link } from "react-router-dom";
import InputField from "../InputField";

const FirstForm = ({ errors, register }) => {
  return (
    <div className=" md:w-full rounded-md flex  ">
      <div className=" w-full  rounded-md  flex-col p-5">
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
          <input
            {...register("date")}
            type="date"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
          />
          <div className="invalid-feedback">
            {errors["date"] && errors["date"].message}
          </div>
        </div>

        <h3 className="text-center text-white mt-5">
          Already Have An Account?{" "}
          <Link style={{ color: "blue" }} to={"/signIn"}>
            Sign In
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default FirstForm;
