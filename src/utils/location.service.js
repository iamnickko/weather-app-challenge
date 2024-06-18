import axios from "axios";
import dummyWeatherData from "../../data/dummyWeatherData.json";
import { useNavigate } from "react-router-dom";

export const searchForWeather = async (location, setWeatherData) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=6f1a3c4fb4dfce3690facf8b6e72c50c&units=metric`
  );
  setWeatherData(response.data);
  //   setWeatherData(dummyWeatherData.dublin);
};

export const updateState = (data) => {
  const tempDays = [];
  const dayIndices = getDayIndices(data);

  for (let i = 0; i < 5; i++) {
    const currentData = data.list[dayIndices[i]];
    tempDays.push({
      date: currentData.dt_txt,
      weather_desc: currentData.weather[0].description,
      icon: currentData.weather[0].icon,
      temp: currentData.main.temp,
    });
  }
  return tempDays;
};
// returns array with Indices of the next five days in the list from the API data (every day at 12:00 pm)
const getDayIndices = (data) => {
  let dayIndices = [0];
  let currentDay = data.list[0].dt_txt.slice(8, 10);

  for (let i = 1; i < data.list.length; i++) {
    let day = data.list[i].dt_txt.slice(8, 10);
    let hour = data.list[i].dt_txt.slice(11, 13);

    if (day !== currentDay && hour === "15") {
      dayIndices.push(i);
      currentDay = day;

      // Stop after finding 4 different days
      if (dayIndices.length === 5) {
        break;
      }
    }
  }
  return dayIndices;
};

export const checkForLocations = (setLocationList) => {
  const userLocations = localStorage.getItem("userLocations");
  if (!userLocations) return;
  setLocationList(JSON.parse(userLocations));
};

export const addLocation = async (location) => {
  const token = localStorage.getItem("accessToken");
  const email = localStorage.getItem("userEmail");
  const response = await axios.put(
    `${import.meta.env.VITE_APP_SERVER}/savedLocations`,
    {
      ...location,
      email,
    },
    {
      headers: {
        "X-Access-Token": token,
      },
    }
  );
  localStorage.setItem(
    "userLocations",
    JSON.stringify(response.data.savedLocations)
  );
  return response.data;
};

export const removeLocations = async (locationId) => {
  const token = localStorage.getItem("accessToken");
  const email = localStorage.getItem("userEmail");

  const response = await axios.put(
    `${import.meta.env.VITE_APP_SERVER}/removeLocation`,
    {
      id: locationId,
      email,
    },
    {
      headers: {
        "X-Access-Token": token,
      },
    }
  );
  localStorage.setItem(
    "userLocations",
    JSON.stringify(response.data.savedLocations)
  );
  return response.data;
};
