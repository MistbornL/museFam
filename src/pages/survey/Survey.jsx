import React from "react";
import { useForm } from "react-hook-form";
import "./survey.scss";
import { Navbar } from "../../Navigation/Navbar";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { surveySchema } from "../../components/Schema/surveySchema";
import InputField from "../../components/InputField";
import { useEffect } from "react";
import { handleQuestions } from "../../api/handleQuestions";
import { handleAnswers } from "../../api/handleAnswers";
import { LoadingSpinner } from "../../components/LoadingSpinner ";
import { motion } from "framer-motion";

function SurveyQuest() {
  const formOptions = {
    resolver: yupResolver(surveySchema),
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    handleQuestions(setQuestions);
    setIsLoading(false);
  }, []);

  const onSubmit = (data) => {
    setIsLoading(true);
    handleAnswers(data, questions, setFormSubmitted, setResult, setIsLoading);
  };

  const resultVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="App"
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <main className="flex rounded-2xl w-full justify-center ">
            <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
              {formSubmitted ? (
                <motion.div
                  className="text-white text-center absolute top-1/2  left-1/2"
                  variants={resultVariants}
                  animate="visible"
                  initial="hidden"
                >
                  Congratulations You Are Assigned to {result}
                </motion.div>
              ) : (
                <>
                  <div className="text-center mt-3">
                    <h1 className="text-3xl text-white font-medium">
                      Discover Your True Calling
                    </h1>
                    <p className="text-lg font-medium text-white">
                      Take our survey and find out which career path aligns with
                      your passions and strengths
                    </p>
                  </div>
                  <div className="  rounded-lg p-4">
                    {questions.map((question, index) => (
                      <fieldset className="font-small" key={index}>
                        <legend className="text-white">
                          {question.prompt}
                        </legend>
                        <InputField
                          no={index + 1}
                          key={index}
                          options={question.answers}
                          type="radio"
                          register={register}
                          errors={errors}
                        />
                      </fieldset>
                    ))}

                    <button
                      style={{
                        boxShadow: "0px 4px 34px 4px rgba(64, 117, 255, 0.3)",
                        border: "1px solid #4075FF",
                      }}
                      type="submit"
                      className="mt-3 bg-blue text-white px-7 py-2 rounded-lg "
                    >
                      submit
                    </button>
                  </div>
                </>
              )}
            </form>
          </main>
        </>
      )}
    </motion.div>
  );
}
export default SurveyQuest;
