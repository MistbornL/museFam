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

  const onSubmit = (data) => {
    console.log("Form submitted: ", Object.values(data));
    handleAnswers(data, questions, setFormSubmitted, setResult);
  };

  useEffect(() => {
    handleQuestions(setQuestions);
  }, []);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="flex rounded-2xl w-full justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          {formSubmitted ? (
            <div className="text-white">
              Congratulations You Are Assigned to {result}
            </div>
          ) : (
            <>
              {questions.map((question, index) => (
                <fieldset key={index}>
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
              <button className="btn btn-primary">submit</button>
            </>
          )}
        </form>
      </main>
    </div>
  );
}
export default SurveyQuest;
