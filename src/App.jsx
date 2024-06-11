import { Routes, Route } from "react-router-dom";

import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Location from "./pages/Location";
import SavedLocations from "./pages/SavedLocations";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/savedLocations" element={<SavedLocations />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
