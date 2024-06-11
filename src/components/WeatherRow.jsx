import WeatherCard from "../components/WeatherCard";

const WeatherRow = () => {
  return (
    <div className="container text-center">
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4">
        <div className="col my-2">
          <WeatherCard />
        </div>
        <div className="col my-2">
          <WeatherCard />
        </div>
        <div className="col my-2">
          <WeatherCard />
        </div>
        <div className="col my-2">
          <WeatherCard />
        </div>
      </div>
    </div>
  );
};
export default WeatherRow;
