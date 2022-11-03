import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Utimate.ai", () => {
  render(<App />);
  const linkElement = screen.getByText("Utimate.ai");
  expect(linkElement).toBeInTheDocument();
});
