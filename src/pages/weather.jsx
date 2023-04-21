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
        console.log("meal data", data);
      }
    }
    fetchData();
    setWeather((prevState) => ({
      // change hot state to true to show hot recipes
      ...prevState,
      hot: false,
      cold: true,
    }));
  };

  const handleHotClick = (button, url) => {
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
        console.log("meal data", data);
      }
    }
    fetchData();
    setWeather((prevState) => ({
      // change cold state to true to show hot recipes
      // copys original object then to update state
      ...prevState,
      hot: true,
      cold: false,
    }));
  };

  useEffect(() => {
    console.log("weather updated:", weather);
  }, [weather]); // runs on first render and when weather state is updated (hot or cold)

  const [errorMessageHot, setErrorMessageHot] = useState(false);
  const [errorMessageCold, setErrorMessageCold] = useState(false);
  const [mealData, setMealData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        <h3>Is it hot or cold? You tell me!</h3>
        <HotColdButton
          activeButton={activeButton}
          hot={handleHotClick}
          cold={handleColdClick}
          hotUrl={
            "https://api.spoonacular.com/recipes/informationBulk?apiKey=d34a6b716ce04b2b9ce0656be11610c1&ids=655926,652508,655174,660403,667704,657719,643561,637357,652995,638190,645455,1697739,716433,639600,643972,659929,716437,661789,641014,662235,662263,662264,662222,1697717,662271&includeNutrition=true"
          }
          coldUrl={
            "https://api.spoonacular.com/recipes/informationBulk?apiKey=10320504da754f4a83b42468d49cb216&ids=661260,660275,665379,640798,665388,633774,633668,639320,633831,640182,715571,638263,647867,646353,636610,660406,639722,632590,656720,662100,640994,633344,654438,1697749,638668,647551,633637&includeNutrition=true"
          }
        />

        {weather.hot && !errorMessageHot && (
          <MealList isLoading={isLoading} mealData={mealData} />
        )}
        {weather.hot && errorMessageHot && (
          <div className="error-message">
            <p>
              An error occurred while loading data from the API, you have
              reached the maximum limit of calls. Try again later!
            </p>
          </div>
        )}
        {weather.cold && !errorMessageCold && (
          <MealList isLoading={isLoading} mealData={mealData} />
        )}
        {weather.cold && errorMessageCold && (
          <div className="error-message">
            <p>
              An error occurred while loading data from the API, you have
              reached the maximum limit of calls. Try again later!
            </p>
          </div>
        )}
      </main>
    </>
  );
};
