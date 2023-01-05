import React, { useState } from "react";
import FirstForm from "../components/steps/FirstForm";
import SecondForm from "../components/steps/SecondForm";
import ThirdForm from "../components/steps/ThirdForm";
import { Navbar } from "../Navigation/Navbar";
import { useForm } from "react-hook-form";
import { formSchemaPersonal } from "../components/Schema/formSchemaPersonal";
import { formSchemaLocation } from "../components/Schema/formSchemaLocation";
import { yupResolver } from "@hookform/resolvers/yup";
import { StepIcons } from "../components/StepIcons";

export const SignUp = () => {
  const formList = ["FirstForm", "SecondForm", "ThirdForm"];
  const steps = ["Registration", "Other Info", "Person Info"];
  const formOptions = {
    resolver: yupResolver(formSchemaPersonal),
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
    if (Object.keys(errors).length === 5 && page === 0) {
      setPage(page === formLength - 1 ? 0 : page + 1);
    } else if (page === 1 && Object.keys(errors).length === 0) {
      setPage(page === formLength - 1 ? 0 : page + 1);
    }
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
        return <SecondForm register={register} errors={errors} />;
      }
      case 2: {
        return <ThirdForm register={register} errors={errors} />;
      }
      default:
        return null;
    }
  };

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

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-col  justify-center gap-4 place-content-center items-center  place-items-center "
        >
          <ul className="flex justify-between w-full">
            {steps.map((step, index) => {
              return (
                <StepIcons name={step} key={index} page={page} index={index} />
              );
            })}
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
                type="submit"
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
        </form>
      </main>
    </div>
  );
};
