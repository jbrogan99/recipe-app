import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { PrintButton } from "../components/printbutton";
import { MyContext } from "../components/instructionsContext";
import { Button } from "../components/button";

export const RecipeInstructions = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const { id } = useParams(); /*extract ID from paramater*/
  const { shoppingList, setShoppingList } = useContext(MyContext);

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

  console.log("extendedIngredients", data);
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
            <div className="button-flex-instructions">
              <div className="button-wrapper">
                <a href="#" className="btn btn3" onClick={() => handleClick()}>
                  Add to list{" "}
                </a>
              </div>
            </div>
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
              })
            : null}
        </div>
      </main>
    </>
  );
};
