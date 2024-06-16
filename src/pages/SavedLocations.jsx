import BackgroundWrapper from "../components/BackgroundWrapper";
import FavouriteLocation from "../components/FavouriteLocation";
import PageTitle from "../components/PageTitle";

const SavedLocations = ({ locationList, setWeatherData }) => {
  return (
    <BackgroundWrapper>
      <PageTitle title={"Telling you about..."} />
      <div className="row">
        <h1 className="mb-4">Favourite Locations</h1>
        <p>
          Click <i className="bi bi-bookmark-star-fill"></i> to remove from
          favourites
        </p>
        <p>Click name to view info</p>
      </div>

      <div className="row align-items-middle">
        {locationList &&
          locationList.map((location, index) => (
            <FavouriteLocation
              key={index}
              location={location}
              setWeatherData={setWeatherData}
            />
          ))}
      </div>
    </BackgroundWrapper>
  );
};
export default SavedLocations;
