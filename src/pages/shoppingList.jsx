import React from "react";
import { Button } from "../components/button";

export const ShoppingList = ({ shoppingList }) => {
  console.log("shopping list page", shoppingList);
  return (
    <>
      <h1 id="shopping-title">Shopping List</h1>
      {shoppingList.map((item) => {
        return (
          <ul>
            <li>{item}</li>
          </ul>
        );
      })}
      <div id="clear-container">
        <Button text="clear" link="#" />
      </div>
    </>
  );
};
