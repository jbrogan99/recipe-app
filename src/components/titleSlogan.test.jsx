import { render, screen } from "@testing-library/react";
import { TitleSlogan } from "./titleSlogan";

test("elements are visible on the screen", () => {
  render(<TitleSlogan />);
  expect(screen.getByRole("heading")).toBeVisible();
});
