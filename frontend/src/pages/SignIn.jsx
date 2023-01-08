import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { Navbar } from "../Navigation/Navbar";
import { formSchemaLogin } from "../components/Schema/formSchemaLogin";
import { motion } from "framer-motion";
import { handleLogin } from "../api/handleLogin";

export const SignIn = () => {
  const formOptions = { resolver: yupResolver(formSchemaLogin) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const navigate = useNavigate();
  const onSubmit = (data) => {
    handleLogin(data, navigate);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="App"
    >
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <div className="container h-100 mt-5 bg:dark">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div
                  style={{ borderRadius: "15px" }}
                  className="card bg-wood p-5"
                >
                  <div className="card-body ">
                    <h2 className="text-uppercase text-center mb5">Log In</h2>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-outline mb-4">
                      <label htmlFor="email">Username</label>
                      <input
                        {...register("userName")}
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        placeholder="username"
                        type="text"
                      />
                      <div className="invalid-feedback">
                        {errors.userName && errors.userName.message}
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label htmlFor="password">Password</label>
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
                      <Link to="/signup" className="fw-bold text-body">
                        <u>Sign Up here</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};
