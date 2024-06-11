import BackgroundWrapper from "../components/BackgroundWrapper";
import FavouriteLocation from "../components/FavouriteLocation";
import PageTitle from "../components/PageTitle";

const SavedLocations = () => {
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
        <FavouriteLocation locationName={"Location component Name"} />
        <div className="col-12 col-sm-6 col-md-4">
          <p>
            <i className="bi bi-bookmark-star-fill"></i> Location 1 Name
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p>
            <i className="bi bi-bookmark-star-fill"></i> Location 1 Name
          </p>
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <p>
            <i className="bi bi-bookmark-star-fill"></i> Location 1 Name
          </p>
        </div>
      </div>
    </BackgroundWrapper>
  );
};
export default SavedLocations;
