import React, { useContext } from "react";
import { PrintButton } from "../components/printbutton";
import { MyContext } from "../components/instructionsContext";
import { NewButton } from "../components/newButton";

export const ShoppingList = () => {
  const { shoppingList } = useContext(MyContext);

  console.log("shopping list page", shoppingList);
  return (
    <>
      <main id="shopping-container">
        <h1 id="shopping-title">Shopping List</h1>
        <div id="recipe-ingredients-list">
          {shoppingList.map((item) => {
            return (
              <ul>
                <li>{item}</li>
              </ul>
            );
          })}
        </div>
        <div id="clear-container">
          <PrintButton text="print" />
        </div>
      </main>
    </>
  );
};
