import { addLocation } from "../utils/location.service.js";

const WeatherToday = ({ weatherData, cityDetails }) => {
  const { coord, name, id } = cityDetails;
  const detailsToSave = { coord, name, id };

  const onClickAddFavouriteHandler = async () => {
    await addLocation(detailsToSave);
  };
  return (
    <>
      <h2>{cityDetails.name}</h2>
      <h3>Today's Weather:</h3>
      <p className="make-cursor" onClick={onClickAddFavouriteHandler}>
        <i className="bi bi-bookmark-star"></i> Click to add to favourites
      </p>
      <div className="row">
        <div className="col-6 text-end">
          <img src={`/assets/weather-icons/${weatherData.icon}.svg`} alt="" />
        </div>
        <div className="col-6 text-start align-self-center">
          {weatherData.temp}&deg; {weatherData.weather_desc}
        </div>
      </div>
    </>
  );
};
export default WeatherToday;
