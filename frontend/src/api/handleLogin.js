import axios from "axios";

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
      localStorage.setItem("token", response.data.access_token);
      console.log(response.data);
    }
  } catch (error) {
    alert("something went wrong");
    console.error(error);
  }
};
