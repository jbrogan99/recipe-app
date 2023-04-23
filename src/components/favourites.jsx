import React, { useState, useEffect } from "react";
import Loading from "./loading";
import vegetarian from "../health-images-small/vegetarianism-vegan-friendly-veganism-logo-brand-vegetarian-logo-3c9e4e12543f37bd7903e99215502861.png";
import vegan from "../health-images-small/vegan-icon.png";
import protein from "../health-images-small/high-protein-sign-stamp-white-background-vector-illustration-high-protein-sign-stamp-171023492.jpg";
import { Button } from "./button";

export const Favorites = ({ favoritesData, index }) => {
  const handleDragStart = (e) => e.preventDefault();

  return (
    <>
      <div className="carousel-img-container" data-value={index}>
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
              link={`/instructions/${favoritesData.id}`}
              text="Recipe"
              favoritesData={favoritesData}
            />
          </div>
        </section>
      </div>
    </>
  );
};
