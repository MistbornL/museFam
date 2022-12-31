import axios from "axios";

export const handleRegister = async (data) => {
  try {
    const response = await axios.post("/api/register", data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
