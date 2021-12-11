import Header from "../Header";
import React from "react";
import { render } from "@testing-library/react";
import userEvents from "@testing-library/user-event";

describe("this suit should test Header compo", () => {
  test("Snapshot of Body", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
