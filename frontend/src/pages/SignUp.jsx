import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { formSchema } from "../components/formSchema";
import { Typeahead } from "react-bootstrap-typeahead";
import "./signUp.scss";
import { handleRegister } from "../api/handleRegister";

export const SignUp = () => {
  const formOptions = { resolver: yupResolver(formSchema) };
  const [skillsList, setSkillsList] = useState(["ah", "yeah", "shnell"]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);
    try {
      await handleRegister(data);
    } catch (error) {
      alert(error);
    }
    setLoading(false);
    navigate("/");
  };

  return (
    <div className="container h-100 mt-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-14 col-md-9 col-lg-7 col-xl-12">
          <div style={{ borderRadius: "15px" }} className="card p-5">
            <div className="card-body ">
              <h2 className="text-uppercase text-center mb5">Create Account</h2>
            </div>

            <form
              className="d-flex flex-column"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="d-flex justify-content-between">
                <InputField
                  name="firstName"
                  register={register}
                  errors={errors}
                />
                <InputField
                  name="location"
                  register={register}
                  errors={errors}
                />
              </div>

              <div className="d-flex justify-content-between">
                <InputField
                  name="lastName"
                  register={register}
                  errors={errors}
                />

                <InputField
                  name="postCode"
                  register={register}
                  errors={errors}
                />
              </div>

              <div className="d-flex justify-content-between">
                <InputField
                  name="userName"
                  register={register}
                  errors={errors}
                />
                <InputField name="skills" register={register} errors={errors} />
              </div>

              <div className="d-flex justify-content-between">
                <InputField name="email" register={register} errors={errors} />
                <div className="form-outline col-6 mb-4">
                  <Typeahead
                    id="basic-example"
                    onChange={setSelectedSkills}
                    options={skillsList}
                    multiple
                    placeholder="Select Tag"
                    selected={selectedSkills}
                  />
                </div>
              </div>

              <InputField
                type="password"
                name="password"
                register={register}
                errors={errors}
              />

              <InputField
                type="password"
                name="repeatPassword"
                register={register}
                errors={errors}
              />
              <div className="form-check d-flex justify-content-center  gap-2 mb-3">
                <label className="form-check-label" htmlFor="form2Example3">
                  I agree all statements in <a href="#!">Terms of service</a>
                  <input
                    style={{ marginLeft: "7px" }}
                    className="form-check-input "
                    type="checkbox"
                    onChange={(e) => {
                      e.target.checked ? setChecked(true) : setChecked(false);
                    }}
                    id="form2Example3"
                  />
                </label>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  disabled={!checked}
                  type="submit"
                  className="btn w-50 btn-primary btn-block btn-lg gradient-custom-4 text-body"
                >
                  {loading ? <LoadingSpinner /> : "Register"}
                </button>
              </div>

              <p className="text-center text-muted mt-5 mb-0">
                Already have an account?{" "}
                <a href="/" className="fw-bold text-body">
                  <u style={{ color: "#007bff" }}>Login here</u>
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
