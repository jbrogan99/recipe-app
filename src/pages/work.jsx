import React, { useState, useEffect } from "react";
import { Cartoon } from "../components/cartoon";
import { TitleSlogan } from "../components/titleSlogan";
import cartoon from "../cartoon-images/work-cartoon.png";
import bubble from "../cartoon-images/bubble-new-min.png";
import { MealList } from "../components/mealList";
export const Work = () => {
  const arr = [
    "I wan't tasty",
    <br />,
    "re-heatable meals!",
    <br />,
    "I can’t afford these",
    <br />,
    "work prices.",
  ];
  const url =
    "https://api.spoonacular.com/recipes/informationBulk?apiKey=5e79c565e6fa4e49be716c0b02cd495e&ids=638586,1098303,661676,657159,658517,648479,632797,636488,632795,660400,157473,769754,650871,637473,637210,654911,649122,634854,645261,658535,648712,644785,664491&includeNutrition=true";

  const [errorMessage, setErrorMessage] = useState(false);
  const [mealData, setMealData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      console.log("fetch");
      const response = await fetch(url);
      if (!response.ok) {
        setErrorMessage(true);
      } else {
        const data = await response.json();
        setMealData(data);
        setIsLoading(false);
        console.log("meal data", data);
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
          text={arr}
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
