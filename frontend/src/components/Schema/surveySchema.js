import * as yup from "yup";
export const surveySchema = yup.object().shape({
  question1: yup.string().required("Please select an option"),
  question2: yup.string().required("Please select an option"),
  question3: yup.string().required("Please select an option"),
  question4: yup.string().required("Please select an option"),
  question5: yup.string().required("Please select an option"),
  question6: yup.string().required("Please select an option"),
  question7: yup.string().required("Please select an option"),
  question8: yup.string().required("Please select an option"),
  question9: yup.string().required("Please select an option"),
  question10: yup.string().required("Please select an option"),
});
