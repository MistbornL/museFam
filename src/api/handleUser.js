import axios from "axios";
import Cookies from "js-cookie";

export const handleUser = async (setAccount) => {
  try {
    const response = await axios.get(`https://ouprji.deta.dev/users/me`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    if (response.status === 200) {
      console.log(response.data);
      setAccount(response.data);
    }
  } catch (error) {
    alert(error.response.data.detail);
    console.error(error);
  }
};
