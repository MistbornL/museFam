import React from "react";
import InputField from "../InputField";

const FirstForm = ({ errors, register }) => {
  return (
    <div style={{ width: "700px" }} className="card rounded-md flex max-w-sm ">
      <form
        style={{ borderRadius: "10px" }}
        className=" w-full bg-white rounded-md  flex-col p-5"
      >
        <InputField name={"fullName"} register={register} errors={errors} />

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
      </form>
    </div>
  );
};

export default FirstForm;
