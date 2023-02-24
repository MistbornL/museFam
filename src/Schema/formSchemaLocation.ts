import * as Yup from "yup";
export const formSchemaLocation = Yup.object().shape({
  streetName: Yup.string().required("Street name is required"),
  streetNo: Yup.number()
    .required("Street number is required")
    .positive("Street number must be a positive number"),
  postalCode: Yup.string().required("Postal code is required"),
});
