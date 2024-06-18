import BackgroundWrapper from "../components/BackgroundWrapper";
import PageTitle from "../components/PageTitle";
import WeatherRow from "../components/WeatherRow";
import WeatherToday from "../components/WeatherToday";
import { updateState } from "../utils/location.service";

const Location = ({ weatherData }) => {
  console.log(weatherData);
  const cityDetails = weatherData.city;
  const days = updateState(weatherData);

  return (
    <BackgroundWrapper>
      {!days && <p>Loading...</p>}
      {days.length > 0 && (
        <>
          <div className="row">
            <PageTitle title={"Telling you about..."} />
          </div>
          <div className="row mb-5">
            <WeatherToday weatherData={days[0]} cityDetails={cityDetails} />
          </div>
          <div className="row mb-5">
            <WeatherRow weatherData={days} />
          </div>
        </>
      )}
    </BackgroundWrapper>
  );
};
export default Location;
