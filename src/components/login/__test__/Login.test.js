import { render, screen } from "@testing-library/react";
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

  test("button shoud be rendered", () => {
    render(<Login />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
