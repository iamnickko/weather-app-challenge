import BackgroundWrapper from "../components/BackgroundWrapper";
import PageTitle from "../components/PageTitle";
import WeatherRow from "../components/WeatherRow";
import WeatherToday from "../components/WeatherToday";
import { updateState } from "../utils/location.service.js";

const Location = ({ weatherData }) => {
  const days = updateState(weatherData);
  console.log(days.length);
  return (
    <BackgroundWrapper>
      {days.length === 0 && <p>There is nothing to display.</p>}
      {days.length > 0 && (
        <>
          <div className="row">
            <PageTitle title={"Telling you about..."} />
          </div>
          <div className="row mb-5">
            <WeatherToday weatherData={days[0]} />
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
