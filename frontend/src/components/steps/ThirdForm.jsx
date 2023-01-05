import React from "react";
import { Link } from "react-router-dom";
import InputField from "../InputField";

const FirstForm = ({ errors, register }) => {
  return (
    <div className=" md:w-full rounded-md flex  ">
      <form className=" w-full bg-white rounded-md  flex-col p-5">
        <InputField name={"skills"} register={register} errors={errors} />

        <InputField name={"interests"} register={register} errors={errors} />

        <h3 className="text-center">
          Already Have An Account?{" "}
          <Link style={{ color: "blue" }} to={"/"}>
            Sign In
          </Link>
        </h3>
      </form>
    </div>
  );
};

export default FirstForm;
