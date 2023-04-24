import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/button";

export const RecipeInstructions = ({ setShoppingList, shoppingList }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const { id } = useParams();

  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=c928226c90814b6abab015fdd892513b`;
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      if (!response.ok) {
        setErrorMessage(true);
      }
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const handleClick = () => {
    data.extendedIngredients?.forEach((element) => {
      setShoppingList((shoppingList) => {
        return [...shoppingList, element.original];
      }); // chained set state call
    });
  };
  // console.log("Instructions data", data);
  console.log("shopping list recipe page", shoppingList);
  // if (Object.keys(data).length > 0) {
  return (
    <>
      <main className="instructions-container">
        <h1>{data.title}</h1>
        <div className="instructions-img-container">
          <img src={data.image} alt={data.title} />
        </div>
        <div className="ingredients-ready-container">
          <div className="ready-servings-container">
            <b>
              <p>Ready in: {data.readyInMinutes} minutes</p>
            </b>
            <b>
              <p>Servings: {data.servings}</p>
            </b>
            <Link
              to={{
                pathname: `/instructions/${id}`,
                shoppingList: shoppingList,
              }}
              onClick={() => handleClick(data.extendedIngredients)}
            >
              Add to list
            </Link>
          </div>
          <div className="ingredients-container">
            <h2>Ingredients</h2>
            {data.extendedIngredients?.map((element) => {
              return (
                <ul className="ul-ingredients">
                  <li>{element.original}</li>
                </ul>
              );
            })}
          </div>
        </div>
        <div className="method-container">
          <h2>Instructions</h2>
          {Object.keys(data).length > 0
            ? data.analyzedInstructions[0]?.steps?.map((element) => {
                return (
                  <>
                    <p>
                      Step {element.number}: {element.step}
                    </p>
                  </>
                );
                // console.log("number", element.number);
              })
            : null}
        </div>
      </main>
    </>
  );
};
