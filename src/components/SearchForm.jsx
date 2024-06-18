import { useEffect, useState } from "react";
import { searchForWeather } from "../utils/location.service";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ setWeatherData }) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  useEffect(() => {
    if (searchInput) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [searchInput]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await searchForWeather(searchInput, setWeatherData);
    navigate(`/location`);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="form mb-5" action="">
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="location"
            id="location"
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Enter location"
            value={searchInput}
          />
        </div>
        <div className="mb-3 text-center">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isBtnDisabled}
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};
export default SearchForm;
