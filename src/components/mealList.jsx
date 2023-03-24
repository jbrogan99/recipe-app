import React, { useState, useEffect } from "react";
import vegetarian from "../images/vegetarianism-vegan-friendly-veganism-logo-brand-vegetarian-logo-3c9e4e12543f37bd7903e99215502861.png";
import vegan from "../images/vegan-icon.png";
import { Button } from "./button";
export const MealList = () => {
  const url =
    "https://api.spoonacular.com/recipes/informationBulk?apiKey=0967c5b1dbcb4b5a84457c3b31b70645&ids=1062883,665175,715495,661460,1515523,665193,1095938,1450327,704655,643612,641220,022743,638780,638649,642809,1460497,157459,37264,645687,36676,1098351,42583&includeNutrition=true";

  const [mealData, setMealData] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setMealData(data);
    }
    fetchData();
  }, []);

  console.log("data use state", mealData);
  return (
    <>
      {mealData.map((data, index) => {
        return (
          <>
            <section className="meal-data-container">
              <h3 className="meal-title">{data.title}</h3>
              <img
                src={data.image}
                alt={data.title}
                key={index}
                className="meal-image"
              />
              <div className="meal-info">
                {data.vegetarian === true ? (
                  <img
                    src={vegetarian}
                    alt="vegetarian symbol"
                    className="vegetarian-image"
                  />
                ) : null}
                {data.vegan === true ? (
                  <img src={vegan} alt="vegan symbol" className="vegan-image" />
                ) : null}
                <p className="servings">Servings: {data.servings}</p>
                <p className="time">
                  Reading in Minutes: {data.readyInMinutes}
                </p>
                <p className="calories">
                  {data.nutrition.nutrients[0].amount}
                  {data.nutrition.nutrients[0].unit}
                </p>
                <p className="fat">
                  {data.nutrition.nutrients[1].name}:
                  {data.nutrition.nutrients[1].amount}
                  {data.nutrition.nutrients[1].unit}
                </p>
                <p className="saturated">
                  {data.nutrition.nutrients[2].name}:
                  {data.nutrition.nutrients[2].amount}
                  {data.nutrition.nutrients[2].unit}
                </p>
                <p className="protein">
                  {data.nutrition.nutrients[8].name}:
                  {data.nutrition.nutrients[8].amount}
                  {data.nutrition.nutrients[8].unit}
                </p>
              </div>
              <Button text="Get Recipe" />
            </section>
          </>
        );
      })}
    </>
  );
};
