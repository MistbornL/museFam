import React, { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is mandatory")
      .min(3, "Password must be at 3 char long"),

    email: Yup.string().email().required("email is mandatory"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section>
      {" "}
      <div className="container h-100 mt-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div style={{ borderRadius: "15px" }} className="card p-5">
              <div className="card-body ">
                <h2 className="text-uppercase text-center mb5">Log In</h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-outline mb-4">
                  <input
                    {...register("email")}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Email"
                    type="text"
                  />
                  <div className="invalid-feedback">
                    {errors.email && errors.email.message}
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input
                    {...register("password")}
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    placeholder="Password"
                    type="password"
                  />
                  <div className="invalid-feedback">
                    {errors.password && errors.password.message}
                  </div>
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body"
                  >
                    Login
                  </button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">
                  Don't have an account?{" "}
                  <a href="/signup" className="fw-bold text-body">
                    <u>Sign Up here</u>
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
