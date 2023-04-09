import { getByText, render, screen, fireEvent } from "@testing-library/react";
import { RecipeFinder } from "./recipie-finder";
import { BrowserRouter } from "react-router-dom";

test("all recipe information is displayed ", () => {
  const setActivePage = jest.fn();

  render(
    <BrowserRouter>
      <RecipeFinder
        title="recipe1"
        slogan="slogan"
        alt1="alt"
        alt2="alt2"
        url1="../pages/home.jsx"
        url2="../pages/hungover.jsx"
        info="info"
        setActivePage={setActivePage}
      />
    </BrowserRouter>
  );

  expect(screen.getByRole("heading")).toHaveTextContent("recipe1");
  expect(screen.getByText("slogan")).toBeVisible();
  expect(
    screen.getByRole("img", { name: "alt", src: "../pages/home.jsx" })
  ).toBeVisible();
  expect(
    screen.getByRole("img", { name: "alt2", src: "../pages/hungover.jsx" })
  ).toBeVisible();
  expect(screen.getByText("info")).toBeVisible();

  fireEvent.click(screen.getByRole("link"));
  expect(setActivePage).toHaveBeenCalled();
});
