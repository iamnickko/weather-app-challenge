import axios from "axios";
import { registerAuthForm, loginAuthForm } from "../src/utils/auth.service.js";

vi.mock("axios");

describe("auth.service.js tests:", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("registerAuthForm tests:", () => {
    it("should return the data when the request is successful", async () => {
      const data = { success: true };
      axios.post.mockResolvedValue({ data });

      const formInput = { email: "test@test.com", password: "password" };
      const response = await registerAuthForm(formInput);

      expect(response).toEqual(data);
      expect(axios.post).toHaveBeenCalledWith(
        `${import.meta.env.VITE_APP_SERVER}/auth/signup`,
        formInput
      );
    });

    it("should throw an error when the request fails", async () => {
      const errorMessage = "Request failed";
      axios.post.mockRejectedValue({
        response: { data: { message: errorMessage } },
      });

      const formInput = { email: "test@test.com", password: "password" };
      await expect(registerAuthForm(formInput)).rejects.toThrow(errorMessage);
      expect(axios.post).toHaveBeenCalledWith(
        `${import.meta.env.VITE_APP_SERVER}/auth/signup`,
        formInput
      );
    });
  });

  describe("loginAuthForm tests:", () => {
    it("should return data when the request is successful", async () => {
      const data = {
        accessToken: "token",
        email: "test@test.com",
        savedLocations: ["location1", "location2"],
      };
      axios.post.mockResolvedValue({ data });

      const formInput = { email: "test@test.com", password: "password" };
      const response = await loginAuthForm(formInput);

      expect(response).toEqual(data);
      expect(axios.post).toHaveBeenCalledWith(
        `${import.meta.env.VITE_APP_SERVER}/auth/login`,
        formInput
      );
    });
  });
});
