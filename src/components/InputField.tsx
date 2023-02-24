import React from "react";

const InputField = ({
  no,
  name,
  register,
  errors,
  options,
  type = "text",
  holder = name,
}) => {
  return (
    <div className="form-outline mb-2">
      {type === "radio" ? (
        options.map((option, index) => {
          return (
            <div className="text-white text-2xl flex gap-3" key={index}>
              <input
                className="form-check-input flex "
                {...register(`question${no}`)}
                type="radio"
                value={option}
              />
              {option}
            </div>
          );
        })
      ) : (
        <>
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor={name}
          >
            {name}
          </label>
          <input
            {...register(name)}
            id="form"
            className={`form-control rounded-lg  ${
              errors.name ? "is-invalid" : ""
            }`}
            placeholder={holder}
            type={type}
          />

          <div className="invalid-feedback">
            {errors[name] && errors[name].message}
          </div>
        </>
      )}
    </div>
  );
};

export default InputField;
