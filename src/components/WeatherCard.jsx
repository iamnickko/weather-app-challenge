const WeatherCard = (props) => {
  console.log(props);
  return (
    <div className="card text-bg-dark">
      <img
        src={`/assets/weather-icons/${props.icon}.svg`}
        className="card-img img-fluid opacity-50"
        alt="..."
      />
      <div className="card-img-overlay text-center container">
        <div className="row align-items-start">
          <div className="col">
            <h5 className="card-title">{props.date}</h5>
          </div>
        </div>
        <div className="row align-items-end card-text">
          <div className="col">
            <p>{props.temp} &deg;C</p>
            <p>{props.weather_desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
