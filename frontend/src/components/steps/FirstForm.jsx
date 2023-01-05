import React from "react";
import { Link } from "react-router-dom";
import InputField from "../InputField";

const FirstForm = ({ errors, register }) => {
  return (
    <div className="md:w-full rounded-md flex">
      <form className=" w-full bg-white rounded-md  flex-col p-5">
        <InputField name={"fullName"} register={register} errors={errors} />

        <InputField name={"userName"} register={register} errors={errors} />

        <InputField name={"email"} register={register} errors={errors} />

        <InputField
          name={"password"}
          holder="******"
          register={register}
          errors={errors}
          type="password"
        />

        <InputField
          name={"repeatPassword"}
          holder="******"
          register={register}
          errors={errors}
          type="password"
        />

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
