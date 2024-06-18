import Home from "../src/pages/Home.jsx";
import userEvent from "@testing-library/user-event";
import * as locationService from "../src/utils/location.service.js";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { afterEach, describe } from "vitest";

describe("Home page tests:", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });
  afterEach(() => {
    vi.clearAllMocks();
  });
  it("should call searchForWeather on button click", async () => {
    //ARRANGE
    const getLocationSpy = vi.spyOn(locationService, "searchForWeather");
    //ACT
    const locationInput = await screen.findByPlaceholderText(/Enter location/i);
    await userEvent.type(locationInput, "London");
    const searchButton = screen.getByRole("button", { name: /search/i });
    await userEvent.click(searchButton);
    //ASSERT
    expect(getLocationSpy).toHaveBeenCalled();
  });

  it("should have a disabled submit button when search input is blank ", async () => {
    //ARRANGE
    //ACT
    const searchButton = screen.getByRole("button", { name: /search/i });
    const locationInput = await screen.findByPlaceholderText(/Enter location/i);

    // Assert
    expect(locationInput.value).toBe("");
    expect(searchButton).toBeDisabled();
  });
});
