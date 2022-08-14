import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "./Search.jsx";

describe("this suit is for search component", function () {
  test("search box must have", function () {
    const onChange = jest.fn();

    render(
      <Search value="" onChange={onChange}>
        Search for
      </Search>
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("search box render", function () {
    const onChange = jest.fn();

    render(
      <Search value="" onChange={onChange}>
        Search for
      </Search>
    );

    userEvent.type(screen.getByRole("textbox"), "react");
    expect(onChange).toHaveBeenCalledTimes(5);
  });
});
