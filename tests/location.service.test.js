import axios from "axios";
import {
  searchForWeather,
  addLocation,
  removeLocations,
} from "../src/utils/location.service";
import { afterEach, describe, vi } from "vitest";

vi.mock("axios");

describe("location.service tests", () => {
  afterEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  describe("searchForWeather tests", () => {
    it("should provide weather data for the searched city", async () => {
      const weatherData = {
        list: [
          {
            dt: 1707501600,
            main: {
              temp: 280.75,
            },
            weather: [
              {
                description: "overcast clouds",
              },
            ],
          },
        ],
      };

      axios.get.mockResolvedValue({ data: weatherData });
      const setWeatherData = vi.fn();

      await searchForWeather("London", setWeatherData);
      expect(setWeatherData).toHaveBeenCalledWith(weatherData);
    });

    it("should handle errors", async () => {
      axios.get.mockRejectedValue(new Error("It'll be an error!"));
      const setWeatherData = vi.fn();

      await expect(searchForWeather("nowhere", setWeatherData)).rejects.toThrow(
        "It'll be an error!"
      );
    });
  });

  describe("addLocation tests", () => {
    it("should add a location and update the localStorage", async () => {
      const location = { city: "London", country: "UK" };
      const savedLocations = [{ city: "Paris", country: "France" }, location];
      const response = { data: { savedLocations } };
      const token = "test-token";
      const email = "test@example.com";

      localStorage.setItem("accessToken", token);
      localStorage.setItem("userEmail", email);

      axios.put.mockResolvedValue(response);

      const result = await addLocation(location);

      expect(axios.put).toHaveBeenCalledWith(
        `${import.meta.env.VITE_APP_SERVER}/savedLocations`,
        { ...location, email },
        { headers: { "X-Access-Token": token } }
      );
      expect(localStorage.getItem("userLocations")).toEqual(
        JSON.stringify(savedLocations)
      );
      expect(result).toEqual(response.data);
    });

    it("should handle errors if they are thrown", async () => {
      const location = { city: "nowhereGood", country: "somewhereWorse" };
      const token = "test-token";
      const email = "email@email.com";

      localStorage.setItem("accessToken", token);
      localStorage.setItem("userEmail", email);

      axios.put.mockRejectedValue(new Error("It didn't work!"));

      await expect(addLocation(location)).rejects.toThrow("It didn't work!");
    });
  });

  describe("removeLocation tests", () => {
    it("should remove a location and update the localStorage", async () => {
      const locationId = "123";
      const savedLocations = [{ city: "Cambridge", country: "GB" }];
      const response = { data: { savedLocations } };
      const token = "test-token";
      const email = "email@email.com";

      localStorage.setItem("accessToken", token);
      localStorage.setItem("userEmail", email);

      axios.put.mockResolvedValue(response);

      const result = await removeLocations(locationId);

      expect(axios.put).toHaveBeenCalledWith(
        `${import.meta.env.VITE_APP_SERVER}/removeLocation`,
        { id: locationId, email },
        { headers: { "X-Access-Token": token } }
      );
      expect(localStorage.getItem("userLocations")).toEqual(
        JSON.stringify(savedLocations)
      );
      expect(result).toEqual(response.data);
    });
  });
});
