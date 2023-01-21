import React from "react";
import { useForm } from "react-hook-form";
import "./survey.scss";
import { Navbar } from "../../Navigation/Navbar";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { surveySchema } from "../../components/Schema/surveySchema";
import InputField from "../../components/InputField";

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

  const onSubmit = (data) => {
    console.log("Form submitted: ", data);
    setFormSubmitted(true);
  };

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="flex rounded-2xl w-full justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          {formSubmitted ? (
            <div className="text-white">Thank you for submitting the form!</div>
          ) : (
            <>
              {questions.map((question) => (
                <fieldset key={question.name}>
                  <legend>{question.text}</legend>
                  {question.options.map((option) => (
                    <InputField
                      key={option.value}
                      type="radio"
                      name={question.name}
                      value={option.value}
                      text={option.text}
                      register={register}
                      errors={errors}
                    />
                  ))}
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
