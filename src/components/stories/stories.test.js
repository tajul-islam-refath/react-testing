import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

import Stories from "./Stories.jsx";

jest.mock("axios");

describe("stories api test suit", function () {
  test("fetches stories from an API and displays them", async function () {
    let stories = [
      { objectID: "1", title: "title one" },
      { objectID: "2", title: "title tow" },
      { objectID: "3", title: "title three" },
    ];

    let promice = Promise.resolve({ data: { hits: stories } });
    await axios.get.mockImplementationOnce(() => promice);

    render(<Stories />);

    await userEvent.click(screen.getByRole("button"));

    await act(() => promice);
    await screen.getAllByRole("listitem").toHaveLength(0);

    let items = await screen.findAllByRole("listitem");

    expect(items).toHaveLength(3);
  });
});
