import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import banner from "../images/green.jpg";
import { RecipeFinder } from "../components/recipie-finder";
import beanChilliWrap from "../resized-home-images/bean_and_rice_burrito_33565_16x9.jpg";
import pork from "../resized-home-images/Crispy-chicken - broccoli-noodles-recipe-1400x919-929996b5-bb25-4f12-9482-732dce513260-0-1400x919.jpg";
import soup from "../resized-home-images/soup-min.jpg";
import salad from "../resized-home-images/salad.jpg";
import pasta1 from "../resized-home-images/healthy-pasta-recipes.jpg";
import pasta2 from "../resized-home-images/healthy-pasta.jpg";
import burger from "../resized-home-images/hamburger-food.jpg";
import carbonara from "../resized-home-images/carbonara.jpg";
import { Favorites } from "../components/favourites";
import Loading from "../components/loading";

export const Home = ({ setActivePage }) => {
  const [favoritesData, setFavoritesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  // const url =
  //   "https://api.spoonacular.com/recipes/informationBulk?apiKey=0967c5b1dbcb4b5a84457c3b31b70645&ids=643674,1095711,1697621,1062883,642701,1070648&includeNutrition=true";
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       setErrorMessage(true);
  //     }
  //     const data = await response.json();
  //     setFavoritesData(data);
  //     setIsLoading(false);
  //     console.log("favorites data", favoritesData);
  //   }
  //   fetchData();
  // }, []);

  const url = "http://localhost:3001/recipes";
  const netlifyUrl =
    "https://recipe-jbrogan.netlify.app/.netlify/functions/favouriterecipes";
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      if (!response.ok) {
        setErrorMessage(true);
      }
      const data = await response.json();
      setFavoritesData(data);
      setIsLoading(false);
    }
    // console.log("favorites data", favoritesData);
    fetchData();
    console.log("favorites data", favoritesData);
    // console.log("data result 1", favoritesData.favoritesResults[0]);
  }, []);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  function favoritesGallery() {
    const items = [
      <Favorites favoritesData={favoritesData.favoritesResults[0]} index={1} />,
      <Favorites favoritesData={favoritesData.favoritesResults[1]} index={2} />,
      <Favorites favoritesData={favoritesData.favoritesResults[2]} index={3} />,
      <Favorites favoritesData={favoritesData.favoritesResults[3]} index={4} />,
      <Favorites favoritesData={favoritesData.favoritesResults[4]} index={5} />,
      <Favorites favoritesData={favoritesData.favoritesResults[5]} index={6} />,
    ];

    return items;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section className="banner">
        <h2 className="white inter-font" id="banner-text1">
          Want <span>affordable, quick, healthy </span> meals? <br /> Check out
          our meals to suit your needs
        </h2>
      </section>
      <div className="carousel-header">
        <h2 className="work-sans-font">A Few Favorites</h2>
      </div>
      {errorMessage ? (
        <div className="error-message">
          <p>
            An error occurred while loading data from the API, you have reached
            the maximum limit of calls. Try again later!
          </p>
        </div>
      ) : (
        <section className="carousel">
          {favoritesData.favoritesResults.length > 0 && (
            <AliceCarousel
              mouseTracking
              items={favoritesGallery()}
              paddingLeft={50}
              paddingRight={50}
              responsive={responsive}
            />
          )}
        </section>
      )}
      <main className="pastel-background recipe-finder-container">
        <div id="recipe-one-container">
          <RecipeFinder
            title="Feeling"
            lastLetter={` ${"Hungover?"}`}
            slogan="Have you had one too many?"
            url1={beanChilliWrap}
            url2={pork}
            info="Enjoy some of our easy, tasty and nutritional dishes, cooks in under 10 minutes"
            alt1="bean and rice wrap"
            alt2="chilli pork"
            setActivePage={setActivePage}
            link="hungover"
            pageName="hungover"
          />
        </div>
        <div id="recipe-two-container">
          <RecipeFinder
            title="Hows the"
            lastLetter={` ${"Weather?"}`}
            slogan="Is it wet and rainy, or is the sun beaming down?"
            url1={soup}
            url2={salad}
            info="Whatever the weather, we’ve got the dishes you need!"
            alt1="tomato soup"
            alt2="chicken salad"
            setActivePage={setActivePage}
            link="weather"
            pageName="weather"
          />
        </div>
        <div id="recipe-three-container">
          <RecipeFinder
            title="Food for"
            lastLetter={` ${"Work?"}`}
            slogan="Sick of spending money on overpriced foods at work? "
            url1={pasta1}
            url2={pasta2}
            info="We have a great selection of healthy re-heatable meals for you to take into work! "
            alt1="beef pasta with sweetcorn"
            alt2="tagliatelle pasta with herbs"
            setActivePage={setActivePage}
            link="work"
            pageName="work"
          />
        </div>
        <div id="recipe-four-container">
          <RecipeFinder
            title="No Time to "
            lastLetter={` ${"Travel?"}`}
            slogan="Do you have to travel to find the right ingredients? "
            url1={burger}
            url2={carbonara}
            info="All the ingredients for the dishes can be found in any budget supermarket"
            alt1="hamburger"
            alt2="carbonara"
            setActivePage={setActivePage}
            link="travel"
            pageName="travel"
          />
        </div>
      </main>
    </>
  );
};
