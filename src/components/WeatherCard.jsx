const WeatherCard = () => {
  return (
    <div className="card text-bg-dark">
      <img
        src="/assets/weather-icons/01d.svg"
        className="card-img img-fluid opacity-50"
        alt="..."
      />
      <div className="card-img-overlay text-center container">
        <div className="row align-items-start">
          <div className="col">
            <h5 className="card-title">Next Day Name</h5>
          </div>
        </div>
        <div className="row align-items-end card-text">
          <div className="col">
            <p>X &deg;C</p>
            <p>Weather Desc</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
