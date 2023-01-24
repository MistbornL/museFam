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
  streetName: Yup.string().required("Street name is required"),
  streetNo: Yup.number()
    .required("Street number is required")
    .positive("Street number must be a positive number"),
  postalCode: Yup.string().required("Postal code is required"),
  country: Yup.string().required("Country code is required"),
  city: Yup.string().required("City code is required"),
  date: Yup.string().required("Date is required"),
});
