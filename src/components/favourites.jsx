import React, { useState, useEffect } from "react";
import Loading from "./loading";
import vegetarian from "../images/vegetarianism-vegan-friendly-veganism-logo-brand-vegetarian-logo-3c9e4e12543f37bd7903e99215502861.png";
import vegan from "../images/vegan-icon.png";
import protein from "../images/high-protein-sign-stamp-white-background-vector-illustration-high-protein-sign-stamp-171023492.jpg";
import { Button } from "./button";

export const Favorites = ({ index }) => {
  const [favoritesData, setFavoritesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url =
    "https://api.spoonacular.com/recipes/informationBulk?apiKey=d34a6b716ce04b2b9ce0656be11610c1&ids=643674,1095711,1697621,1062883,642701,1070648&includeNutrition=true";
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setFavoritesData(data);
      setIsLoading(false);
      console.log("favorites data", favoritesData);
    }
    fetchData();
  }, []);
  const handleDragStart = (e) => e.preventDefault();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="carousel-img-container">
        <section className="favorites-container">
          <div className="img-one-fav">
            <img
              src={favoritesData[index].image}
              alt={favoritesData[index].title}
              className="meal-image"
              onDragStart={handleDragStart}
            />
          </div>
          <h3 className="meal-title-fav">{favoritesData[index].title}</h3>
          <div className="left-side-grid">
            {favoritesData[index].vegetarian === true ? (
              <img
                src={vegetarian}
                alt="vegetarian symbol"
                className="vegetarian-image"
              />
            ) : null}

            {favoritesData[index].vegan === true ? (
              <img src={vegan} alt="vegan symbol" className="vegan-image" />
            ) : null}
            {favoritesData[index].nutrition.nutrients[8].amount > 20 ? (
              <img
                src={protein}
                alt="High in protein"
                className="protein-image"
              />
            ) : null}
          </div>
          <div className="right-side-grid">
            <p className="time">
              Ready in: {favoritesData[index].readyInMinutes} Min
            </p>
            <p className="calories">
              {favoritesData[index].nutrition.nutrients[0].amount}
              {favoritesData[index].nutrition.nutrients[0].unit}
            </p>
            <Button
              link={
                favoritesData[index].spoonacularSourceUrl
                  ? favoritesData[index].spoonacularSourceUrl
                  : favoritesData[index].sourceUrl
              }
              text="Recipe"
            />
          </div>
        </section>
      </div>
    </>
  );
};
