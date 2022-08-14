// import React from "react";
// import Body from "../Body";
// import { render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

// describe("This suit is to test the Body component", () => {
//   test("Snapshot of Body", () => {
//     const { asFragment } = render(<Body title="hello world" />);
//     expect(asFragment()).toMatchSnapshot();
//   });

//   test("findeng title", () => {
//     const { getByText } = render(<Body title="Tajul Islam Refath" />);
//     expect(getByText("Tajul Islam Refath")).toBeInTheDocument(
//       "Tajul Islam Refath"
//     );
//   });

//   test("Test by testid", function () {
//     const { getByTestId } = render(<Body title="test by id" />);
//     expect(getByTestId("header")).toHaveTextContent(/^test by id$/);
//   });

//   test("Check counter initial value", function () {
//     const { getByTestId } = render(<Body title="Tajul Islam Refath" />);
//     expect(getByTestId("counter")).toHaveTextContent("0");
//   });

//   test("check counter value after a tap", function () {
//     const { getByTestId } = render(<Body title="Tajul Islam Refath" />);
//     const button = getByTestId("button");
//     userEvent.click(button);
//     expect(getByTestId("counter")).toHaveTextContent("1");
//   });

//   test("check Counter value after tapping twice", () => {
//     const { getByTestId } = render(<Body title="Jay Rocks" />);
//     const button = getByTestId("button");
//     userEvent.click(button);
//     userEvent.click(button);
//     expect(getByTestId("counter")).toHaveTextContent("2");
//   });
// });
