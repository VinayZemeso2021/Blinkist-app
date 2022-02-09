import { render, screen } from "@testing-library/react";
import Avatar from ".";

it("renders the avatar", () => {
  render(<Avatar/>);
  expect(screen.getByTestId("avatar")).toBeInTheDocument();
});