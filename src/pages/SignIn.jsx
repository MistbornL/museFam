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
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    setLoading(true);
    await handleLogin(data, navigate);
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="App"
    >
      <main>
        <section>
          <div className="container h-100 mt-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div style={{ borderRadius: "15px" }} className="  p-5">
                  <div className="card-body ">
                    <h2 className="text-uppercase text-center text-white mb5">
                      Log In
                    </h2>
                  </div>

                  <form
                    className="text-white "
                    onSubmit={handleSubmit(onSubmit)}
                  >
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

                    <div className="d-flex justify-content-center ">
                      <button
                        type="submit"
                        className="rounded-2xl px-7 py-3 hover:text-black hover:bg-gray-light  border "
                      >
                        {loading ? (
                          <>
                            <div className="flex gap-3">
                              <div
                                className=" spinner-border text-primary"
                                role="status"
                              ></div>
                              Processing...
                            </div>
                          </>
                        ) : (
                          "Login"
                        )}
                      </button>
                    </div>
                    <p className="text-center text-white mt-5 mb-0">
                      Don't have an account?{" "}
                      <Link to="/signup" className="fw-bold text-blue">
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
