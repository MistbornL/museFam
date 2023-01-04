import React, { useState } from "react";
import FirstForm from "../components/steps/FirstForm";
import SecondForm from "../components/steps/SecondForm";
import ThirdForm from "../components/steps/ThirdForm";
import { Navbar } from "../Navigation/Navbar";
import { useForm } from "react-hook-form";
import { formSchemaPersonal } from "../components/Schema/formSchemaPersonal";
import { formSchemaLocation } from "../components/Schema/formSchemaLocation";
import { yupResolver } from "@hookform/resolvers/yup";

export const SignUp = () => {
  const formList = ["FirstForm", "SecondForm", "ThirdForm"];
  const formOptions = {
    resolver: yupResolver(formSchemaPersonal, formSchemaLocation),
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const formLength = formList.length;

  const [page, setPage] = useState(0);

  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
  };
  const handleNext = () => {
    setPage(page === formLength - 1 ? 0 : page + 1);
  };

  const handleForms = () => {
    switch (page) {
      case 0: {
        return (
          <div>
            <FirstForm register={register} errors={errors} />
          </div>
        );
      }
      case 1: {
        return (
          <SecondForm
            register={register}
            errors={errors}
            onChange={onChange}
            option={states}
          />
        );
      }
      case 2: {
        return <ThirdForm register={register} errors={errors} />;
      }
      default:
        return null;
    }
  };

  const states = [
    { id: "0", name: "Paris" },
    { id: "1", name: "London" },
    { id: "2", name: "Berlin" },
    { id: "3", name: "Warsaw" },
  ];

  const setForm = (e) => {
    const name = e.target.innerText;
    switch (name) {
      case "Registration": {
        return setPage(0);
      }
      case "Other Info": {
        return setPage(1);
      }
      case "Person Info": {
        return setPage(2);
      }
      default:
        setPage(0);
    }
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({ ...values, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="flex justify-center">
        <div className="flex-col  justify-center gap-4 place-content-center items-center  place-items-center ">
          <ul className="flex justify-between w-full">
            <li
              onClick={setForm}
              className={
                page === 0
                  ? "bg-blue-300 w-2/6 rounded-lg  "
                  : "bg: transparent"
              }
            >
              <div className="flex items-center ">
                <span className="stepper-head-icon">
                  <svg
                    className="h-8 w-8 text-blue-200"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <line x1="12" y1="12" x2="12" y2="12.01" />{" "}
                    <path
                      d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                      transform="rotate(45 12 12)"
                    />{" "}
                    <path
                      d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                      transform="rotate(-45 12 12)"
                    />
                  </svg>
                </span>
                <span
                  className={
                    page === 0
                      ? "ml-2 text-white font-medium"
                      : "ml-2 text-blue-300 cursor-pointer"
                  }
                >
                  Person Info
                </span>
              </div>
            </li>
            <li
              onClick={setForm}
              className={
                page === 1
                  ? "bg-blue-300  w-2/6 rounded-lg"
                  : "bg: transparent "
              }
            >
              <div className="flex items-center">
                <span className="stepper-head-icon">
                  {" "}
                  <svg
                    className="h-8 w-8 text-blue-200"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <line x1="12" y1="12" x2="12" y2="12.01" />{" "}
                    <path
                      d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                      transform="rotate(45 12 12)"
                    />{" "}
                    <path
                      d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                      transform="rotate(-45 12 12)"
                    />
                  </svg>
                </span>
                <span
                  className={
                    page === 1
                      ? "ml-2 text-white font-medium"
                      : "ml-2 text-blue-300 cursor-pointer"
                  }
                >
                  Other Info
                </span>
              </div>
            </li>
            <li
              onClick={setForm}
              className={
                page === 2 ? "bg-blue-300 w-2/6 rounded-lg" : "bg: transparent"
              }
            >
              <div className="flex items-center">
                <span className="stepper-head-icon">
                  <svg
                    className="h-8 w-8 text-blue-200"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="12" y1="12" x2="12" y2="12.01" />
                    <path
                      d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                      transform="rotate(45 12 12)"
                    />
                    <path
                      d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                      transform="rotate(-45 12 12)"
                    />
                  </svg>
                </span>
                <span
                  className={
                    page === 2
                      ? "ml-2 text-white font-medium"
                      : "ml-2 text-blue-300 cursor-pointer"
                  }
                >
                  Login Info
                </span>
              </div>
            </li>
          </ul>
          <div className="flex-1 justify-center w-full rounded-2x">
            {handleForms()}
          </div>
          <div className="grid grid-cols-2 gap-4 place-content-center items-center">
            <button
              onClick={handlePrev}
              className="bg-blue-200  hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 disabled:bg-gray-400 "
              disabled={page === 0}
            >
              Prev
            </button>
            {page === 2 ? (
              <button
                onClick={handleSubmit}
                className="bg-blue-200 hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 "
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-blue-200 hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 "
              >
                Next
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
