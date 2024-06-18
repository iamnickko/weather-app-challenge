import { render, screen } from "@testing-library/react";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";
import App from "../src/App.jsx";
import { afterEach } from "vitest";
import dummyWeatherData from "../data/dummyWeatherData.json";

const { dublin } = dummyWeatherData;

describe("App routing tests", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render the 404 page", () => {
    render(
      <MemoryRouter initialEntries={["/doesNotExist"]}>
        <App />
      </MemoryRouter>
    );
    const error404 = screen.getByText(/404/i);
    expect(error404).toBeInTheDocument();
  });

  it("should render the home page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const searchInputPlaceholder = screen.getByLabelText("location");
    expect(searchInputPlaceholder).toBeInTheDocument();
  });

  it("should render the saved locations page", () => {
    render(
      <MemoryRouter initialEntries={["/savedLocations"]}>
        <App />
      </MemoryRouter>
    );
    const savedLocationsText = screen.getByText("Favourite Locations");
    expect(savedLocationsText).toBeInTheDocument();
  });

  it("should render the auth login page", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );
    const authFormText = screen.getByRole("button", { name: /Login/i });
    expect(authFormText).toBeInTheDocument();
  });

  it("should render the auth register page", () => {
    render(
      <MemoryRouter initialEntries={["/register"]}>
        <App />
      </MemoryRouter>
    );
    const authFormText = screen.getByRole("button", { name: /Register/i });
    expect(authFormText).toBeInTheDocument();
  });

  it.skip("should render an individual location page", () => {
    render(
      <MemoryRouter initialEntries={["/location"]}>
        <App>
          <Location weatherData={dublin} />
        </App>
      </MemoryRouter>
    );
    const singleLocationText = screen.getByText("Today's Weather");
    expect(singleLocationText).toBeInTheDocument();
  });
});
