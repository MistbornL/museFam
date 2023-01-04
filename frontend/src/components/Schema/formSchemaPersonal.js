import * as Yup from "yup";

export const formSchemaPersonal = Yup.object().shape({
  fullName: Yup.string().required("full name is mandatory"),
  userName: Yup.string()
    .required("username is mandatory")
    .min(5, "Username must be at least 5 characters long"),
  email: Yup.string().email().required("email is mandatory"),
  password: Yup.string()
    .required("Password is mandatory")
    .min(3, "Password must be at 3 char long"),
  repeatPassword: Yup.string()
    .required("Password is mandatory")
    .oneOf([Yup.ref("password")], "Passwords does not match"),
});
