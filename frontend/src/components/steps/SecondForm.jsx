import React from "react";
import InputField from "../InputField";

const FirstForm = ({ errors, register }) => {
  return (
    <div style={{ width: "700px" }} className="card rounded-md flex max-w-sm ">
      <form
        style={{ borderRadius: "10px" }}
        className=" w-full bg-white rounded-md  flex-col p-5"
      >
        <InputField name={"country"} register={register} errors={errors} />

        <InputField name={"city"} register={register} errors={errors} />

        <InputField name={"streetName"} register={register} errors={errors} />

        <InputField name={"streetNo"} register={register} errors={errors} />

        <InputField name={"postalCode"} register={register} errors={errors} />
      </form>
    </div>
  );
};

export default FirstForm;
