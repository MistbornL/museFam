import axios from "axios";

export const handleUser = async (setAccount, token) => {
  try {
    const response = await axios.get(`https://ouprji.deta.dev/users/me`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
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
