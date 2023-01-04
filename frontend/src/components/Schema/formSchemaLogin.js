import * as Yup from "yup";

export const formSchemaLogin = Yup.object().shape({
  password: Yup.string()
    .required("Password is mandatory")
    .min(3, "Password must be at 3 char long"),

  email: Yup.string().email().required("email is mandatory"),
});
