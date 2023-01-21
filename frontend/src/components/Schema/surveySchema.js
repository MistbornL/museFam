import * as yup from "yup";
export const surveySchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  // email: yup
  //   .string()
  //   .email("Invalid email address")
  //   .required("Email is required"),
  // age: yup.number().positive().integer().required("Age is required"),
  // agreeToTerms: yup
  //   .bool()
  //   .required("You must agree to the terms and conditions")
  //   .oneOf([true], "You must agree to the terms and conditions"),
});
