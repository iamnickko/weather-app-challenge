import { Link } from "react-router-dom";

const FavouriteLocation = ({ locationName }) => {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4">
        <p>
          <i className="bi bi-bookmark-star-fill"></i>{" "}
          <Link to={"/location"}>{locationName}</Link>
        </p>
      </div>
    </>
  );
};
export default FavouriteLocation;
