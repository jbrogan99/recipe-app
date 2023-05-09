import React, { useState, useEffect } from "react";
import { Cartoon } from "../components/cartoon";
import { TitleSlogan } from "../components/titleSlogan";
import cartoon from "../images-real/work.jpg";
import bubble from "../cartoon-images/bubble-new-min.png";
import { MealList } from "../components/mealList";
export const Work = () => {
  const url = "http://localhost:3001/recipesWork";
  const netlifyUrl =
    "https://recipe-jbrogan.netlify.app/.netlify/functions/workrecipes";

  const [errorMessage, setErrorMessage] = useState(false);
  const [mealData, setMealData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      console.log("fetch");
      const response = await fetch(netlifyUrl);
      if (!response.ok) {
        setErrorMessage(true);
      } else {
        const data = await response.json();
        setMealData(data.workResults);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <section className="top-info-container">
        <TitleSlogan
          title="Food for Work?"
          slogan="Make one of our recipes the night before, and it will taste just as good the next day! "
        />
        <Cartoon
          src1={cartoon}
          src2={bubble}
          alt1="cartoon man with hands on hs head, panicking"
          text={
            "I wan't tasty re-heatable meals! I can’t afford these work prices."
          }
        />
      </section>
      {errorMessage ? (
        <div className="error-message">
          <p>
            An error occurred while loading data from the API, you have reached
            the maximum limit of calls. Try again later!
          </p>
        </div>
      ) : (
        <MealList isLoading={isLoading} mealData={mealData} />
      )}
    </>
  );
};
