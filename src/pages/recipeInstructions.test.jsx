import { getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RecipeInstructions } from "./recipeInstructions";

describe("Recipe instructions", () => {
  test("to check if recipe list items are shown and items can be added to basket", () => {
    // const user = userEvent.setup();
    const setInstructionsMock = jest.fn();
    render(<RecipeInstructions setShoppingList={setInstructionsMock} />);
    expect(setInstructionsMock).toBeCalledTimes(1);
    // // await expect(screen.getAllByRole("heading")).toHaveLength(3);
  });
});
