import { MealList } from "./mealList";
import { testData } from "./mealList-testdata";
import { render, screen } from "@testing-library/react";
beforeEach(() => {
  fetch.resetMocks();
});

test("all recipe information is displayed", async () => {
  fetch.mockResponseOnce(JSON.stringify(testData)); // mock data
  render(<MealList url="wwww" />); // render meal list comp
  expect((await screen.findAllByRole("heading"))[0]).toHaveTextContent(
    testData[0].title
  ); // await to ensure data is back

  const heading = await screen.findAllByRole("heading");
  expect(heading).toHaveLength(2); //check for two headings in the test data

  expect(screen.queryByRole("img", { name: testData[0].title })).toBeVisible(); // get first image

  expect(screen.getByRole("img", { name: "vegan symbol" })).toBeInTheDocument(); // vegan symbol to be in the document

  expect(screen.getAllByText("Servings: 6")).toHaveLength(2); // length of 2 for Servings: 6

  expect(screen.getAllByText("Ready in: 45 Min")).toHaveLength(2);

  expect(screen.getByText("147.32kcal")).toBeVisible();
  expect(screen.getByText("Fat:3.93g")).toBeVisible();
  expect(screen.getByText("Saturated Fat:11.52g")).toBeVisible();
  expect(screen.getByText("Protein:28.12g")).toBeVisible();
  expect(
    screen.getByRole("img", { name: "High in protein" })
  ).toBeInTheDocument(); // protein symbol to be in the document

  expect(screen.queryAllByText("Recipe")[0].href).toEqual(
    "https://spoonacular.com/chili-garlic-stir-fry-638586"
  );
});
