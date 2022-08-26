import React from "react";
import axios from "axios";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Stories from "./Stories.jsx";

jest.mock("axios");

describe("Stories", () => {
  test("fetches stories from an API and displays them", async () => {
    const stories = [
      { objectID: "1", title: "Hello" },
      { objectID: "2", title: "React" },
    ];

    const promise = Promise.resolve({ data: { hits: stories } });

    axios.get.mockImplementationOnce(() => promise);

    render(<Stories />);

    userEvent.click(screen.getByRole("button"));

    expect(await screen.findAllByRole("listitem")).toHaveLength(2);
  });

  test("fetches stories from an API and fails", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
    render(<Stories />);

    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText(/Something went wrong/)).toBeInTheDocument();
  });
});
