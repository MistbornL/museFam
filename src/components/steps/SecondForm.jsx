import React from "react";
import { Link } from "react-router-dom";
import InputField from "../InputField";

const FirstForm = ({ errors, register }) => {
  return (
    <div className="md:w-full rounded-md ">
      <div
        style={{ borderRadius: "10px" }}
        className=" w-full  rounded-md  flex-col p-5"
      >
        <InputField name={"country"} register={register} errors={errors} />

        <InputField name={"city"} register={register} errors={errors} />

        <InputField name={"streetName"} register={register} errors={errors} />

        <InputField name={"streetNo"} register={register} errors={errors} />

        <InputField name={"postalCode"} register={register} errors={errors} />

        <h3 className="text-center text-white">
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
