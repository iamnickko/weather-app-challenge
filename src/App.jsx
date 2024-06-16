import { Routes, Route } from "react-router-dom";

import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Location from "./pages/Location";
import SavedLocations from "./pages/SavedLocations";
import Auth from "./pages/Auth";
import { useEffect, useState } from "react";
import { checkForToken } from "./utils/auth.service";
import { checkForLocations } from "./utils/location.service";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [locationList, setLocationList] = useState([]);

  useEffect(() => {
    checkForToken(setIsLoggedIn);
    checkForLocations(setLocationList);
    console.log(locationList);
  }, []);
  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home setWeatherData={setWeatherData} />} />
        <Route
          path="/location"
          element={<Location weatherData={weatherData} />}
        />
        <Route
          path="/savedLocations"
          element={<SavedLocations />}
          locationList={locationList}
        />
        <Route path="/auth/register" element={<Auth mode={"Register"} />} />
        <Route
          path="/auth/login"
          element={<Auth mode={"Login"} isLoggedIn={isLoggedIn} />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
