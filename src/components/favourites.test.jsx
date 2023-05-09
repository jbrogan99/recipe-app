import { favouritesData } from "./favourites-testdata";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Favorites } from "./favourites";

describe("favourites", () => {
  test("all recipe information is displayed", () => {
    const input = favouritesData;

    render(<Favorites favoritesData={input} index={0} />);

    expect(screen.getByRole("heading")).toHaveTextContent("Fried Brown Rice");
    expect(screen.getByText("Ready in: 25 Mins")).toBeVisible();
    expect(screen.getByRole("link", { name: "Recipe" })).toBeVisible();
    expect(
      screen.getByRole("img", { name: "vegetarian symbol" })
    ).toBeVisible();
    expect(
      screen.getByRole("img", { name: favouritesData.title })
    ).toBeVisible();
    expect(screen.getByText("470.08kcal")).toBeVisible();
    expect(
      screen.queryByRole("img", { name: "vegan symbol" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("img", { name: "High in protein" })
    ).not.toBeInTheDocument();
  });
});
