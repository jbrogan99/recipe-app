import React, { useState, useEffect } from "react";
import { Cartoon } from "../components/cartoon";
import { TitleSlogan } from "../components/titleSlogan";
import cartoon from "../images-real/hot-fan-removebg-preview.png";
import { MealList } from "../components/mealList";
import { HotColdButton } from "../components/hotColdButton";
export const Weather = () => {
  const bubbleText = [
    "I want something to",
    <br />,
    "accommodate this",
    <br />,
    "weather, what can",
    <br />,
    "I eat ?!",
  ];
  const [activeButton, setActiveButton] = useState("");
  const [weather, setWeather] = useState({
    // state that swaps between hot and cold meals
    hot: false,
    cold: false,
  });

  const handleColdClick = (button, url) => {
    setWeather((prevState) => ({
      // change hot state to true to show hot recipes
      ...prevState,
      hot: false,
      cold: true,
    }));
    setActiveButton(button);
    async function fetchData() {
      console.log("fetch");
      const response = await fetch(url);
      if (!response.ok) {
        setErrorMessageCold(true);
      } else {
        const data = await response.json();
        setMealData(data);
        setIsLoading(false);
        console.log("cold", data);
      }
    }
    fetchData();
  };

  const handleHotClick = (button, url) => {
    setWeather((prevState) => ({
      // change cold state to true to show hot recipes
      // copys original object then to update state
      ...prevState,
      hot: true,
      cold: false,
    }));

    setActiveButton(button);
    async function fetchData() {
      console.log("fetch");
      const response = await fetch(url);
      if (!response.ok) {
        setErrorMessageHot(true);
      } else {
        const data = await response.json();
        setMealData(data);
        setIsLoading(false);
        console.log("hot", data);
      }
    }
    fetchData();
  };

  useEffect(() => {}, [weather]); // runs on first render and when weather state is updated (hot or cold)

  const [errorMessageHot, setErrorMessageHot] = useState(false);
  const [errorMessageCold, setErrorMessageCold] = useState(false);
  const [mealData, setMealData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const netlifyUrlHot =
    "https://recipe-jbrogan.netlify.app/.netlify/functions/hotrecipes";
  const netlifyUrlCold =
    "https://recipe-jbrogan.netlify.app/.netlify/functions/coldrecipes";
  return (
    <>
      <section className="top-info-container">
        <TitleSlogan
          title="Food for the Weather?"
          slogan="Is the whether making you indecisive? Filter through our hot weather and cold weather recipes to help you decide! "
        />
        <Cartoon
          src1={cartoon}
          alt1="cartoon man with hands on hs head, panicking"
          text={bubbleText}
        />
      </section>
      <main id="weather-main-content">
        <section className="filter-container">
          <HotColdButton
            activeButton={activeButton}
            hot={handleHotClick}
            cold={handleColdClick}
            hotUrl={netlifyUrlHot}
            coldUrl={netlifyUrlCold}
          />
        </section>

        {weather.cold && !errorMessageCold && (
          <MealList
            isLoading={isLoading}
            mealData={mealData.weatherColdResults}
          />
        )}
        {weather.hot && !errorMessageHot && (
          <MealList
            isLoading={isLoading}
            mealData={mealData.weatherHotResults}
          />
        )}
      </main>
    </>
  );
};
