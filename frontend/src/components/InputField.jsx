import React from "react";

const InputField = ({
  name,
  register,
  errors,
  type = "text",
  holder = name,
}) => {
  return (
    <div className="form-outline mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {name}
      </label>
      <input
        {...register(name)}
        id="form"
        className={`form-control  ${errors[name] ? "is-invalid" : ""}`}
        placeholder={holder}
        type={type}
      />
      <div className="invalid-feedback">
        {errors[name] && errors[name].message}
      </div>
    </div>
  );
};

export default InputField;
