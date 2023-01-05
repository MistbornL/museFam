import React from "react";
import InputField from "../InputField";

const FirstForm = ({ errors, register }) => {
  return (
    <div style={{ width: "700px" }} className="card rounded-md flex max-w-sm ">
      <form
        style={{ borderRadius: "10px" }}
        className=" w-full bg-white rounded-md  flex-col p-5"
      >
        <InputField name={"skills"} register={register} errors={errors} />

        <InputField name={"interests"} register={register} errors={errors} />
      </form>
    </div>
  );
};

export default FirstForm;
