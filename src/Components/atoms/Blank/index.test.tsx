import { render, screen } from "@testing-library/react";
import Blank from ".";

it("renders the blank component", () => {
  render(<Blank />);
  expect(screen.getByTestId("blank")).toBeInTheDocument();
});