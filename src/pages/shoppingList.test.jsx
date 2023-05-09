import { getByRole, render, screen } from "@testing-library/react";
import { Favorites } from "../components/favourites";
import { ShoppingList } from "./shoppingList";
import {
  MyContext,
  ShoppingListContext,
} from "../components/instructionsContext";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Shopping list", () => {
  test("to check if shopping list items are shown and items can be removed", async () => {
    const user = userEvent.setup();
    const setShoppingListMock = jest.fn();

    render(
      <BrowserRouter>
        <ShoppingList
          shoppingList={[["blah"]]}
          setShoppingList={setShoppingListMock}
        />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading")).toHaveTextContent("Shopping List");
    expect(screen.getAllByRole("link")[1]).toHaveTextContent("Remove");
    expect(screen.getByText("blah")).toBeInTheDocument();
    await user.click(screen.getByRole("link", { name: /REMOVE/i }));
    expect(setShoppingListMock).toBeCalledTimes(1);
    expect(setShoppingListMock).toHaveBeenCalledWith([]);
  });
});
