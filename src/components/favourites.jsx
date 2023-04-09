import React, { useState, useEffect } from "react";
import Loading from "./loading";
import vegetarian from "../images/vegetarianism-vegan-friendly-veganism-logo-brand-vegetarian-logo-3c9e4e12543f37bd7903e99215502861.png";
import vegan from "../images/vegan-icon.png";
import protein from "../images/high-protein-sign-stamp-white-background-vector-illustration-high-protein-sign-stamp-171023492.jpg";
import { Button } from "./button";

export const Favorites = ({ favoritesData }) => {
  // const [favoritesData, setFavoritesData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const url =
  //   "https://api.spoonacular.com/recipes/informationBulk?apiKey=0967c5b1dbcb4b5a84457c3b31b70645&ids=643674,1095711,1697621,1062883,642701,1070648&includeNutrition=true";
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setFavoritesData(data);
  //     setIsLoading(false);
  //     console.log("favorites data", favoritesData);
  //   }
  //   fetchData();
  // }, []);
  const handleDragStart = (e) => e.preventDefault();

  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    <>
      <div className="carousel-img-container">
        <section className="favorites-container">
          <div className="img-one-fav">
            <img
              src={favoritesData.image}
              alt={favoritesData.title}
              className="meal-image"
              onDragStart={handleDragStart}
            />
          </div>
          <h3 className="meal-title-fav">{favoritesData.title}</h3>
          <div className="left-side-grid">
            {favoritesData.vegetarian === true ? (
              <img
                src={vegetarian}
                alt="vegetarian symbol"
                className="vegetarian-image"
              />
            ) : null}

            {favoritesData.vegan === true ? (
              <img src={vegan} alt="vegan symbol" className="vegan-image" />
            ) : null}
            {favoritesData.nutrition.nutrients[8].amount > 20 ? (
              <img
                src={protein}
                alt="High in protein"
                className="protein-image"
              />
            ) : null}
          </div>
          <div className="right-side-grid">
            <p className="time">
              Ready in: {favoritesData.readyInMinutes} Mins
            </p>
            <p className="calories">
              {favoritesData.nutrition.nutrients[0].amount}
              {favoritesData.nutrition.nutrients[0].unit}
            </p>
            <Button
              link={
                favoritesData.spoonacularSourceUrl
                  ? favoritesData.spoonacularSourceUrl
                  : favoritesData.sourceUrl
              }
              text="Recipe"
            />
          </div>
        </section>
      </div>
    </>
  );
};
