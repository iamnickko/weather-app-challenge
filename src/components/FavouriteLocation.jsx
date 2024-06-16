import { removeLocations, searchForWeather } from "../utils/location.service";
import { useNavigate } from "react-router-dom";

const FavouriteLocation = ({ location, setWeatherData }) => {
  const navigate = useNavigate();
  const onClickLocationNameHandler = async () => {
    await searchForWeather(location.name, setWeatherData);
    navigate("/location");
  };

  const onClickRemoveFavouriteHandler = async () => {
    await removeLocations(location);
  };
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4">
        <p>
          <i
            onClick={onClickRemoveFavouriteHandler}
            className="bi bi-bookmark-star-fill make-cursor"
          ></i>{" "}
          <span className="make-cursor" onClick={onClickLocationNameHandler}>
            {location.name}
          </span>
        </p>
      </div>
    </>
  );
};
export default FavouriteLocation;
