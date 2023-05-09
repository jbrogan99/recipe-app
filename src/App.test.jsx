import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { favouritesData } from "./components/favourites-testdata";
import { testData as mealListData } from "./components/mealList-testdata";
import App from "./App";

test("can see Nutrition logo", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: "Nutrition" })).toHaveTextContent(
    "Nutrition"
  );
});

beforeEach(() => {
  fetch.resetMocks();
});

test("Can select Meal Type options", async () => {
  fetch.mockResponseOnce(JSON.stringify(favouritesData));

  const user = userEvent.setup();

  render(<App />);
  expect(
    await screen.findByRole("heading", { name: "A Few Favorites" })
  ).toBeVisible();
  // URL to match the url passed in on the page - [0][0] mocks first call
  expect(fetch.mock.calls[0][0]).toEqual(
    "https://recipe-jbrogan.netlify.app/.netlify/functions/favouriterecipes"
  );

  // hungover
  await user.hover(screen.getByRole("link", { name: "Meal Types" })); // hover ove meal types

  fetch.mockResponseOnce(JSON.stringify(mealListData)); // mock data - json
  await user.click(screen.getByRole("link", { name: "Hungover" })); // user clicks hungover
  expect(
    // result from the mocked data
    await screen.findByRole("heading", {
      name: "Chili-Garlic Stir Fry",
    })
  ).toBeVisible();

  expect(fetch.mock.calls[1][0]).toEqual(
    "https://recipe-jbrogan.netlify.app/.netlify/functions/hungoverrecipes"
  );

  //weather hot
  await user.hover(screen.getByRole("link", { name: "Meal Types" }));
  await user.click(screen.getByRole("link", { name: "Food for Weather" }));
  fetch.mockResponseOnce(JSON.stringify(mealListData));
  await user.click(screen.getByRole("button", { name: "Hot" }));

  expect(
    await screen.findByRole("heading", {
      name: "Chili-Garlic Stir Fry",
    })
  ).toBeVisible();

  expect(fetch.mock.calls[2][0]).toEqual(
    "http://localhost:3001/recipesWeatherHot"
  );
  //weather cold

  fetch.mockResponseOnce(JSON.stringify(mealListData));
  await user.click(screen.getByRole("button", { name: "Cold" }));

  expect(
    await screen.findByRole("heading", {
      name: "Chili-Garlic Stir Fry",
    })
  ).toBeVisible();

  expect(fetch.mock.calls[3][0]).toEqual(
    "http://localhost:3001/recipesWeatherCold"
  );

  // food for work

  await user.hover(screen.getByRole("link", { name: "Meal Types" }));

  fetch.mockResponseOnce(JSON.stringify(mealListData));
  await user.click(screen.getByRole("link", { name: "Food for Work" }));
  expect(
    await screen.findByRole("heading", {
      name: "Chili-Garlic Stir Fry",
    })
  ).toBeVisible();

  expect(fetch.mock.calls[4][0]).toEqual(
    "https://recipe-jbrogan.netlify.app/.netlify/functions/workrecipes"
  );

  // Travel / One stop shop
  await user.hover(screen.getByRole("link", { name: "Meal Types" }));

  fetch.mockResponseOnce(JSON.stringify(mealListData));
  await user.click(screen.getByRole("link", { name: "One Stop Shop" }));
  expect(
    await screen.findByRole("heading", {
      name: "Chili-Garlic Stir Fry",
    })
  ).toBeVisible();

  expect(fetch.mock.calls[5][0]).toEqual(
    "https://recipe-jbrogan.netlify.app/.netlify/functions/travelrecipes"
  );
});
