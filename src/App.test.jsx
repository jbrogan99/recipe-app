import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { favouritesData } from "./components/favourites-testdata";
import { testData as mealListData } from "./components/mealList-testdata";
import App from "./App";

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
  expect(fetch.mock.calls[0][0]).toEqual(
    "https://api.spoonacular.com/recipes/informationBulk?apiKey=0967c5b1dbcb4b5a84457c3b31b70645&ids=643674,1095711,1697621,1062883,642701,1070648&includeNutrition=true"
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
    // URL to match the url passed in on the page - [1][0] mocks first call
    "https://api.spoonacular.com/recipes/informationBulk?apiKey=0967c5b1dbcb4b5a84457c3b31b70645&ids=1062883,665175,715495,661460,1515523,665193,1095938,1450327,704655,643612,641220,022743,638780,638649,642809,1460497,157459,37264,645687,36676,1098351,42583&includeNutrition=true"
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
    "https://api.spoonacular.com/recipes/informationBulk?apiKey=10320504da754f4a83b42468d49cb216&ids=655926,652508,655174,660403,667704,657719,643561,637357,652995,638190,645455,1697739,716433,639600,643972,659929,716437,661789,641014,662235,662263,662264,662222,1697717,662271&includeNutrition=true"
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
    "https://api.spoonacular.com/recipes/informationBulk?apiKey=0967c5b1dbcb4b5a84457c3b31b70645&ids=661260,660275,665379,640798,665388,633774,633668,639320,633831,640182,715571,638263,647867,646353,636610,660406,639722,632590,656720,662100,640994,633344,654438,1697749,638668,647551,633637&includeNutrition=true"
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
    "https://api.spoonacular.com/recipes/informationBulk?apiKey=10320504da754f4a83b42468d49cb216&ids=638586,1098303,661676,657159,658517,648479,632797,636488,632795,660400,157473,769754,650871,637473,637210,654911,649122,634854,645261,658535,648712,644785,664491&includeNutrition=true"
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
    "https://api.spoonacular.com/recipes/informationBulk?apiKey=c928226c90814b6abab015fdd892513b&ids=1161746,1003670,1459207,1095938,1022743,639722,644306,157089,641220,1502523,1095794,157259,1099404,642138,639948,1505411,1003210,637260,1697665,1697645,1697531,636602,390813,621204,654435,660588,1697553,796684,1512847,1070648&includeNutrition=true"
  );
});
