import React from "react";

const InputField = ({ name, register, errors, type = "text" }) => {
  return (
    <div className="form-outline col-5 mb-4">
      <input
        {...register(name)}
        id="form"
        className={`form-control  ${errors[name] ? "is-invalid" : ""}`}
        placeholder={name + "..."}
        type={type}
      />
      <div className="invalid-feedback">
        {errors[name] && errors[name].message}
      </div>
    </div>
  );
};

export default InputField;
