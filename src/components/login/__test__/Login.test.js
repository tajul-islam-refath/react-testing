import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../Login";

describe("This suit is to test login component", () => {
  test("email input shoud be rendered", () => {
    render(<Login />);

    const emailInpute = screen.getByLabelText(/Email/i);
    expect(emailInpute).toBeInTheDocument();
  });

  test("password input shoud be rendered", () => {
    render(<Login />);
    const passwordInpute = screen.getByLabelText(/Password/i);
    expect(passwordInpute).toBeInTheDocument();
  });

  test("Initialy button shoud be disabled", async () => {
    render(<Login />);
    const button = await screen.findByRole("button");
    expect(button).toBeDisabled();
  });

  test("After put email and password button shoud be enabled", async () => {
    render(<Login />);

    userEvent.type(screen.getByLabelText(/email/i), "tajul@gmail.com");
    userEvent.type(screen.getByLabelText(/password/i), "12345");
    screen.debug();
    expect(screen.getByRole("button")).toBeEnabled();
  });
});
