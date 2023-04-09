import React, { useState, useEffect } from "react";
import vegetarian from "../images/vegetarianism-vegan-friendly-veganism-logo-brand-vegetarian-logo-3c9e4e12543f37bd7903e99215502861.png";
import vegan from "../images/vegan-icon.png";
import protein from "../images/high-protein-sign-stamp-white-background-vector-illustration-high-protein-sign-stamp-171023492.jpg";
import { Button } from "./button";
import Loading from "../components/loading";

export const MealList = ({ url }) => {
  const [mealData, setMealData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      console.log("fetch");
      const response = await fetch(url);
      const data = await response.json();
      setMealData(data);
      setIsLoading(false);
      console.log("meal data", data);
    }

    fetchData();
  }, []);

  console.log("data use state", mealData);

  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    <>
      <main className="main-meals-container">
        {mealData.map((data, index) => {
          return (
            <>
              <section className="meal-data-container">
                <div className="grid-one">
                  <h3 className="meal-title">{data.title}</h3>
                  <img
                    src={data.image}
                    alt={data.title}
                    className="meal-image"
                  />
                </div>
                <div className="grid-two">
                  <div className="meal-info">
                    {data.vegetarian === true ? (
                      <img
                        src={vegetarian}
                        alt="vegetarian symbol"
                        className="vegetarian-image"
                      />
                    ) : null}
                    {data.vegan === true ? (
                      <img
                        src={vegan}
                        alt="vegan symbol"
                        className="vegan-image"
                      />
                    ) : null}
                    <p className="servings">Servings: {data.servings}</p>
                    <p className="time">Ready in: {data.readyInMinutes} Min</p>
                  </div>
                  <div className="meal-nutrition">
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
                  <div className="button-container-meals">
                    {data.nutrition.nutrients[8].amount > 20 ? (
                      <img
                        src={protein}
                        alt="High in protein"
                        className="protein-image"
                      />
                    ) : null}
                    <Button
                      link={
                        data.spoonacularSourceUrl
                          ? data.spoonacularSourceUrl
                          : data.sourceUrl
                      }
                      text="Recipe"
                    />
                  </div>
                </div>
              </section>
            </>
          );
        })}
      </main>
    </>
  );
};
