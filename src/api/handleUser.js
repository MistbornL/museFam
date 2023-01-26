import axios from "axios";

export const handleUser = async (setAccount, token) => {
  try {
    const response = await axios.get(`https://ouprji.deta.dev/users/me`, {
      Authorization: `Bearer ${token}`,
    });

    if (response.status === 200) {
      setAccount(response.data);
    }
  } catch (error) {
    alert(error.response.data.detail);
    console.error(error);
  }
};
