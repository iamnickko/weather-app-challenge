import Auth from "../src/pages/Auth.jsx";
import userEvent from "@testing-library/user-event";
import * as authService from "../src/utils/auth.service.js";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe } from "vitest";

const validEmail = "validEmail@email.com";
const validPassword = "Password123!";

describe("Auth Login page tests:", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Auth mode={"Login"} />
      </MemoryRouter>
    );
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should have a disabled submit button when email input is blank ", async () => {
    //ARRANGE

    //ACT
    const emailInput = await screen.findByPlaceholderText(/email@domain.com/i);
    await userEvent.type(emailInput, "   ");

    const passwordInput = await screen.findByPlaceholderText(/password/i);
    await userEvent.type(passwordInput, validPassword);

    const loginButton = screen.getByRole("button", { type: /submit/i });
    await userEvent.click(loginButton);

    //ASSERT
    expect(loginButton).toBeDisabled();
  });

  it("should render an error message when password is invalid", async () => {
    //ARRANGE

    //ACT
    const emailInput = await screen.findByPlaceholderText(/email@domain.com/i);
    await userEvent.type(emailInput, validEmail);

    const passwordInput = await screen.findByPlaceholderText(/password/i);
    await userEvent.type(passwordInput, "invalid");

    const loginButton = screen.getByRole("button", { type: /submit/i });
    await userEvent.click(loginButton);

    //ASSERT
    expect(
      screen.getByText(
        "Password must contain at least one lowercase letter, one capital letter, one number, one special character, and be between 8-15 characters long."
      )
    ).toBeInTheDocument();
  });

  it("Should not call loginAuthForm if there are validation errors", async () => {
    //ARRANGE
    const loginAuthFormSpy = vi.spyOn(authService, "loginAuthForm");
    //ACT
    const emailInput = await screen.findByPlaceholderText(/email@domain.com/i);
    await userEvent.type(emailInput, validEmail);
    const passwordInput = await screen.findByPlaceholderText(/password/i);
    await userEvent.type(passwordInput, " ");
    const loginButton = screen.getByRole("button", { type: /submit/i });
    await userEvent.click(loginButton);
    //ASSERT
    expect(loginAuthFormSpy).not.toHaveBeenCalled();
  });
});

describe("Auth Register page tests:", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Auth mode={"Register"} />
      </MemoryRouter>
    );
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should have a disabled submit button when email input is blank ", async () => {
    //ARRANGE
    //ACT
    const emailInput = await screen.findByPlaceholderText(/email@domain.com/i);
    await userEvent.type(emailInput, "   ");
    const passwordInput = await screen.findByPlaceholderText(/password/i);
    await userEvent.type(passwordInput, validPassword);

    const loginButton = screen.getByRole("button", { type: /submit/i });
    await userEvent.click(loginButton);
    //ASSERT
    expect(loginButton).toBeDisabled();
  });

  it("should render an error message when password is invalid", async () => {
    //ARRANGE

    //ACT
    const emailInput = await screen.findByPlaceholderText(/email@domain.com/i);
    await userEvent.type(emailInput, validEmail);

    const passwordInput = await screen.findByPlaceholderText(/password/i);
    await userEvent.type(passwordInput, "invalid");

    const loginButton = screen.getByRole("button", { type: /submit/i });
    await userEvent.click(loginButton);

    //ASSERT
    expect(
      screen.getByText(
        "Password must contain at least one lowercase letter, one capital letter, one number, one special character, and be between 8-15 characters long."
      )
    ).toBeInTheDocument();
  });
  it("Should not call registerAuthForm if there are validation errors", async () => {
    //ARRANGE
    const registerAuthFormSpy = vi.spyOn(authService, "registerAuthForm");
    //ACT
    const emailInput = await screen.findByPlaceholderText(/email@domain.com/i);
    await userEvent.type(emailInput, validEmail);
    const passwordInput = await screen.findByPlaceholderText(/password/i);
    await userEvent.type(passwordInput, " ");
    const loginButton = screen.getByRole("button", { type: /submit/i });
    await userEvent.click(loginButton);
    //ASSERT
    expect(registerAuthFormSpy).not.toHaveBeenCalled();
  });
});
