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

  return (
    <div className="App">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <header>
            <Navbar />
          </header>
          <main className="flex rounded-2xl w-full justify-center ">
            <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
              {formSubmitted ? (
                <div className="text-white">
                  Congratulations You Are Assigned to {result}
                </div>
              ) : (
                <>
                  {questions.map((question, index) => (
                    <fieldset className="font-medium" key={index}>
                      <legend className="text-white">{question.prompt}</legend>
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
                    className=" bg-blue text-white px-7 py-2 rounded-lg "
                  >
                    submit
                  </button>
                </>
              )}
            </form>
          </main>
        </>
      )}
    </div>
  );
}
export default SurveyQuest;
