import axios from "axios";
import Cookies from "js-cookie";

export const handleLogin = async (data, navigate) => {
  const dat = new URLSearchParams();
  dat.append("username", data.userName);
  dat.append("password", data.password);

  try {
    const response = await axios.post("https://ouprji.deta.dev/login", dat, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });

    if (response.status === 200) {
      // Setting the token in a cookie
      console.log(response.data.access_token);
      Cookies.set("token", response.data.access_token, {
        expires: 1,
      });
      console.log(Cookies.get("token"));
      navigate("/");
    }
  } catch (error) {
    alert(error.response.data.detail);
    console.error(error.response.data.detail);
  }
};
