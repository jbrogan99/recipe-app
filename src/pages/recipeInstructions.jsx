import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const RecipeInstructions = ({ setShoppingList }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const { id } = useParams(); /*extract ID from paramater*/

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

  {
    /* adding recipe ingedients to shopping list array */
  }
  const handleClick = () => {
    const newRecipe = [data.title];
    data.extendedIngredients?.forEach((ingredient) => {
      newRecipe.push(ingredient.original);
    });
    setShoppingList((shoppingList) => {
      return [...shoppingList, newRecipe];
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
            <ul className="ul-ingredients">
              {/* looping round ingredients */}
              {data.extendedIngredients?.map((element, index) => {
                return <li key={index}>{element.original}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="method-container">
          <h2>Instructions</h2>
          <ul>
            {/* looping round instructions */}
            {Object.keys(data).length > 0
              ? data.analyzedInstructions[0]?.steps?.map((element, index) => {
                  return (
                    <li key={index}>
                      Step {element.number}: {element.step}
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </main>
    </>
  );
};
