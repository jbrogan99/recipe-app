import React, { useState, useEffect } from "react";
import { Cartoon } from "../components/cartoon";
import { TitleSlogan } from "../components/titleSlogan";
import cartoon from "../images/HotandCold.jpg";

import { MealList } from "../components/mealList";
import { HotColdButton } from "../components/hotColdButton";
export const Weather = () => {
  const bubbleText = [
    "I want something to accommodate this weather, what can I eat ?! ",
  ];

  const [weather, setWeather] = useState({
    // state that swaps between hot and cold meals
    hot: false,
    cold: false,
  });

  const handleColdClick = () => {
    setWeather((prevState) => ({
      ...prevState,
      hot: false,
      cold: true,
    }));
  };

  const handleHotClick = () => {
    setWeather((prevState) => ({
      // copys original object then to update state
      ...prevState,
      hot: true,
      cold: false,
    }));
  };

  useEffect(() => {
    console.log("weather updated:", weather);
  }, [weather]); // runs on first render and when weather state is updated

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
      <HotColdButton hot={handleHotClick} cold={handleColdClick} />
      {weather.hot && <p>These are all the hot meals</p>}
      {weather.cold && <p>These are all the cold meals</p>}
      <MealList url="" />
    </>
  );
};
