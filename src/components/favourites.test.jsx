import { favouritesData } from "./favourites-testdata";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Favorites } from "./favourites";
import { BrowserRouter } from "react-router-dom";

describe("favourites", () => {
  test("all recipe information is displayed", () => {
    const input = favouritesData.favoritesResults[0];

    render(
      <BrowserRouter>
        <Favorites favoritesData={input} index={0} />
      </BrowserRouter>
    );

    expect(screen.getByRole("heading")).toHaveTextContent("Italian Tuna Pasta");
    expect(screen.getByText("Ready in: 20 Mins")).toBeVisible();
    expect(screen.getByRole("link", { name: "Recipe" })).toBeVisible();

    expect(screen.getByRole("img", { name: input.title })).toBeVisible();
    expect(screen.getByText("463.7kcal")).toBeVisible();
    expect(
      screen.queryByRole("img", { name: "vegan symbol" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("img", { name: "vegetarian symbol" })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "High in protein" })
    ).toBeInTheDocument();
  });
});
