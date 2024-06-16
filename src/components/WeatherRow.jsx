import WeatherCard from "../components/WeatherCard";

const WeatherRow = ({ weatherData }) => {
  const weatherCards = weatherData.slice(1).map((day) => (
    <div key={new Date(day.date).getDay()} className="col my-2">
      <WeatherCard {...day} />
    </div>
  ));

  return (
    <div className="container text-center">
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4">
        {weatherCards}
      </div>
    </div>
  );
};
export default WeatherRow;
