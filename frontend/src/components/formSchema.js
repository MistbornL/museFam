import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  firstName: Yup.string().required("first name is mandatory"),
  lastName: Yup.string().required("lastName is mandatory"),
  email: Yup.string().email().required("email is mandatory"),
  password: Yup.string()
    .required("Password is mandatory")
    .min(3, "Password must be at 3 char long"),
  repeatPassword: Yup.string()
    .required("Password is mandatory")
    .oneOf([Yup.ref("password")], "Passwords does not match"),
  userName: Yup.string()
    .required("username is mandatory")
    .min(5, "Username must be at least 5 characters long"),
  location: Yup.string().required("location is mandatory"),
  postCode: Yup.string().required("post code is mandatory"),
  skills: Yup.string().required("skills  is mandatory"),
});
