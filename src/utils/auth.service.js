import axios from "axios";

export const registerAuthForm = async (formInput) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_SERVER}/auth/signup`,
      {
        email: formInput.email,
        password: formInput.password,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const loginAuthForm = async (formInput, setIsLoggedIn) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_SERVER}/auth/login`,
      { email: formInput.email, password: formInput.password }
    );
    saveToken(response.data.accessToken);
    saveUserLocations(response.data.savedLocations);
    if (response.data.accessToken) {
      setIsLoggedIn(true);
      return response.data;
    }
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const saveToken = (accessToken) => {
  localStorage.setItem("accessToken", accessToken);
};

export const saveUserLocations = (userLocations) => {
  localStorage.setItem("userLocations", userLocations);
};

export const checkForToken = (setIsLoggedIn) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    setIsLoggedIn(true);
  } else {
    setIsLoggedIn(false);
  }
};

export const logout = () => {
  localStorage.clear();
};
