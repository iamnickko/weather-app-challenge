const WeatherToday = () => {
  return (
    <>
      <h2>Place name</h2>
      <h3>Today's Weather:</h3>
      <p>
        <i className="bi bi-bookmark-star"></i> Click to add to favourites
      </p>
      <div className="row">
        <div className="col-6 text-end">
          <img src="/assets/weather-icons/01n.svg" alt="" />
        </div>
        <div className="col-6 text-start align-self-center">
          X&deg; Weather Desc
        </div>
      </div>
    </>
  );
};
export default WeatherToday;
