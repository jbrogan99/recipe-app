import { BrowserRouter } from "react-router-dom";
import { MealList } from "./mealList";
import { testData } from "./mealList-testdata";
import { render, screen } from "@testing-library/react";
beforeEach(() => {
  fetch.resetMocks();
});

test("all recipe information is displayed", async () => {
  fetch.mockResponseOnce(JSON.stringify(testData)); // mock data
  const data = testData.hungoverResults;
  render(
    <BrowserRouter>
      <MealList mealData={data} />
    </BrowserRouter>
  ); // render meal list comp
  expect((await screen.findAllByRole("heading"))[0]).toHaveTextContent(
    data[0].title
  ); // await to ensure data is back

  const heading = await screen.findAllByRole("heading");
  expect(heading).toHaveLength(2); //check for 40 headings in the test data

  expect(screen.queryByRole("img", { name: data[0].title })).toBeVisible(); // get first image

  expect(screen.getByRole("img", { name: "vegan symbol" })).toBeInTheDocument(); // vegan symbol to be in the document

  expect(screen.getAllByText("Servings: 2")).toHaveLength(1); // length of 2 for Servings: 6

  expect(screen.getAllByText("Ready in: 20 Min")).toHaveLength(1);

  // data to be visible on screen
  expect(screen.getByText("217.43kcal")).toBeVisible();
  expect(screen.getByText("Fat:7.76g")).toBeVisible();
  expect(screen.getByText("Saturated Fat:1.13g")).toBeVisible();
  expect(screen.getByText("Protein:10.84g")).toBeVisible();
  expect(
    screen.getByRole("img", { name: "High in protein" })
  ).toBeInTheDocument(); // protein symbol to be in the document

  // expect(screen.queryAllByText("Recipe")[0].href).toEqual(
  //   "https://spoonacular.com/chili-garlic-stir-fry-638586"
  // ); // check first url matches
});
