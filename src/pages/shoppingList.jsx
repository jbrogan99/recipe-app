import React from "react";
import { PrintButton } from "../components/printbutton";
import { Link } from "react-router-dom";

export const ShoppingList = ({ shoppingList, setShoppingList }) => {
  const handleRemoveArray = (index) => {
    {
      /* removes item from array */
    }
    const newItems = [...shoppingList];
    newItems.splice(index, 1);
    setShoppingList(newItems);
  };
  return (
    <>
      <main id="shopping-container">
        <h1 id="shopping-title">Shopping List</h1>
        <div id="clear-container">
          <PrintButton text="print" />
        </div>
        <div id="recipe-ingredients-list">
          {/*loop round outer array */}
          {shoppingList.map((outerArray, index) => {
            return (
              <div key={index}>
                <ul>
                  {/* loop round inner array */}
                  {outerArray.map((item, subIndex) => (
                    <li
                      key={`${index}-${subIndex}`}
                      className="shopping-list-items"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="button-wrapper" key={`${index}-button`}>
                  <Link
                    onClick={() => handleRemoveArray(index)}
                    className="btn btn3 remove"
                  >
                    Remove
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};
