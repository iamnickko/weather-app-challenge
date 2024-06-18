import { NavLink, Link, useNavigate } from "react-router-dom";
import { logout } from "../utils/auth.service";
import { searchForWeather } from "../utils/location.service";
import { useState } from "react";

const Header = ({ isLoggedIn, locationList, setWeatherData }) => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const onClickLogoutHandler = () => {
    logout();
    navigate("/");
  };

  const onSubmitFormHandler = async (e) => {
    e.preventDefault();
    await searchForWeather(searchInput, setWeatherData);
    navigate("/location");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="nav-link">
            <img
              src="src/assets/logoipsum-332.svg"
              alt="logo icon"
              width="30"
              height="24"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/savedLocations"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Saved Locations
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="savedLocations">
                      View All
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  {locationList &&
                    locationList.map((location) => (
                      <li key={location.id}>
                        <p
                          className="dropdown-item make-cursor"
                          onClick={async () => {
                            await searchForWeather(
                              location.name,
                              setWeatherData
                            );
                            navigate("/location");
                          }}
                        >
                          {location.name}
                        </p>
                      </li>
                    ))}
                </ul>
              </li>
              {isLoggedIn && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    onClick={onClickLogoutHandler}
                  >
                    Logout
                  </Link>
                </li>
              )}
              {!isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <form
              className="d-flex"
              role="search"
              onSubmit={onSubmitFormHandler}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
