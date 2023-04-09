import { MealList } from "./mealList";
import { testData } from "./mealList-testdata";
import { render, screen } from "@testing-library/react";
beforeEach(() => {
  fetch.resetMocks();
});

test("all recipe information is displayed", async () => {
  fetch.mockResponseOnce(JSON.stringify(testData));
  render(<MealList url="wwww" />);
  expect((await screen.findAllByRole("heading"))[0]).toHaveTextContent(
    testData[0].title
  );
  const heading = await screen.findAllByRole("heading");
  expect(heading).toHaveLength(3);
});
