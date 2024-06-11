import BackgroundWrapper from "../components/BackgroundWrapper";
import PageTitle from "../components/PageTitle";
import WeatherRow from "../components/WeatherRow";
import WeatherToday from "../components/WeatherToday";

const Location = () => {
  return (
    <BackgroundWrapper>
      <div className="row">
        <PageTitle title={"Telling you about..."} />
      </div>
      <div className="row mb-5">
        <WeatherToday />
      </div>
      <div className="row mb-5">
        <WeatherRow />
      </div>
    </BackgroundWrapper>
  );
};
export default Location;
