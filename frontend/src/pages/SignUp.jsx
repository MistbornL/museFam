import React, { Fragment, useState } from "react";
import FirstForm from "../components/steps/FirstForm";
import SecondForm from "../components/steps/SecondForm";
import ThirdForm from "../components/steps/ThirdForm";
import { Navbar } from "../Navigation/Navbar";
import { useForm } from "react-hook-form";
import { formSchemaPersonal } from "../components/Schema/formSchemaPersonal";

import { yupResolver } from "@hookform/resolvers/yup";
import { StepIcons } from "../components/StepIcons";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { handleRegister } from "../api/handleRegister";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const formList = ["FirstForm", "SecondForm", "ThirdForm"];
  const steps = ["Registration", "Location", "Person Info"];
  const formOptions = {
    resolver: yupResolver(formSchemaPersonal),
  };
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm(formOptions);
  const formLength = formList.length;
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
  };
  const handleNext = () => {
    if (Object.keys(errors).length === 6 && page === 0) {
      console.log(errors);
      setPage(page === formLength - 1 ? 0 : page + 1);
    } else if (page === 1 && Object.keys(errors).length === 1) {
      setPage(page === formLength - 1 ? 0 : page + 1);
    }
  };

  const handleForms = () => {
    switch (page) {
      case 0: {
        return <FirstForm register={register} errors={errors} />;
      }
      case 1: {
        return <SecondForm register={register} errors={errors} />;
      }
      case 2: {
        return <ThirdForm register={register} errors={errors} />;
      }
      default:
        return null;
    }
  };

  const onSubmit = (data) => {
    handleRegister(data, navigate);
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
      <main className="flex justify-center  md:flex ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex-col md:w-144  gap-4 place-content-center items-center  place-items-center "
        >
          <ul className="flex justify-between md:w-full  ">
            {steps.map((step, index) => {
              return (
                <li key={index}>
                  <StepIcons name={step} page={page} index={index} />
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center w-full rounded-2x">
            {handleForms()}
          </div>
          <div className="grid grid-cols-2 gap-4 place-content-center items-center">
            <button
              onClick={handlePrev}
              className="bg-blue-200  hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 disabled:bg-gray-400 text-gray"
              disabled={page === 0}
            >
              Prev
            </button>
            {page === 2 ? (
              <button
                type="submit"
                className="bg-blue-200 hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 "
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-blue-200 hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 text-gray"
              >
                Next
              </button>
            )}
          </div>
        </form>
      </main>
    </motion.div>
  );
};
