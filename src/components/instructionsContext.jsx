import { createContext, useState } from "react";

export const ShoppingListContext = ({ value, children }) => {
  const [shoppingList, setShoppingList] = useState(value ? value : []);
  return (
    <MyContext.Provider value={{ shoppingList, setShoppingList }}>
      {children}
    </MyContext.Provider>
  );
};
export const MyContext = createContext();
