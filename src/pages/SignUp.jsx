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
    formState: { errors },
  } = useForm(formOptions);
  const formLength = formList.length;
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
  };
  const handleNext = () => {};

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

  const onSubmit = async (data) => {
    setLoading(true);
    handleRegister(data, navigate);
    setLoading(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="App"
    >
      <main className="flex justify-center  md:flex ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex-col md:w-144  gap-4 place-content-center items-center  place-items-center "
        >
          <ul className="flex justify-between md:w-full  mt-8">
            {steps.map((step, index) => {
              return (
                <li key={index}>
                  <StepIcons name={step} page={page} index={index} />
                </li>
              );
            })}
          </ul>
          <div className=" flex justify-center w-full rounded-2x">
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
                  "Submit"
                )}
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
