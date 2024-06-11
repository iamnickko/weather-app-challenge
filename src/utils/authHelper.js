import axios from "axios";

export const submitAuthForm = async (formInput) => {
  console.log(formInput);
  try {
    const response = await axios.post("http://localhost:3000/auth/signup", {
      name: formInput.name,
      email: formInput.email,
      password: formInput.password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const saveToken = () => {};
