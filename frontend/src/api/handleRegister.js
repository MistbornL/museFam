import axios from "axios";
import { handleLogin } from "./handleLogin";

export const handleRegister = async (data, navigate) => {
  try {
    const response = await axios.post("https://ouprji.deta.dev/users", {
      full_name: data.fullName,
      username: data.userName,
      dob: data.date,
      email: data.email,
      password: data.password,
      address: {
        country: data.country,
        city: data.city,
        street_name: data.streetName,
        street_no: data.streetNo,
        postal_code: data.postalCode,
      },
    });

    if (response.status === 200) {
      handleLogin(data, navigate);
      console.log(response.data);
    } else if (response.status === 409) {
      alert("username already exists");
    }
  } catch (error) {
    alert("something went wrong");
    console.error(error);
  }
};
