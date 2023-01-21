import React from "react";

const InputField = ({
  key,
  name,
  register,
  errors,
  options,
  type = "text",
  holder = name,
}) => {
  return (
    <div className="form-outline mb-4">
      <label className="block text-white text-sm font-bold mb-2" htmlFor={name}>
        {name}
      </label>
      {type === "radio" ? (
        options.map((option, index) => {
          return (
            <div key={index}>
              <input
                name={name}
                ref={register}
                type={type}
                value={option}
                id={`${name}-${index}`}
              />
              <label htmlFor={`${name}-${index}`} />
              {option}
            </div>
          );
        })
      ) : (
        <input
          {...register(name)}
          key={key}
          id="form"
          className={`form-control  ${errors.name ? "is-invalid" : ""}`}
          placeholder={holder}
          type={type}
        />
      )}

      <div className="invalid-feedback">
        {errors.name && errors.name.message}
      </div>
    </div>
  );
};

export default InputField;
