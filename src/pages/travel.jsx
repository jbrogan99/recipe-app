import React, { useState, useEffect } from "react";
import { Cartoon } from "../components/cartoon";
import { TitleSlogan } from "../components/titleSlogan";
import cartoon from "../images-real/rushed.jpg";
import { MealList } from "../components/mealList";
export const Travel = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [mealData, setMealData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url =
    "http://localhost:3001/recipesTravel";
  const arr = [
    "I don’t have time to",
    <br />,
    "go to Tesco, Asda,",
    <br />,
    "and Aldi. I just need",
    <br />,
    "one shop!",
  ];

  useEffect(() => {
    async function fetchData() {
      console.log("fetch");
      const response = await fetch(url);
      if (!response.ok) {
        setErrorMessage(true);
      } else {
        const data = await response.json();
        setMealData(data.travelResults);
        setIsLoading(false);
        console.log("meal data", data.travelResults);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <section className="top-info-container">
        <TitleSlogan
          title="One stop shop?"
          slogan="All in one place! Check out our recipes that only require one shop. To make it better you can get all ingredients from your local budget supermarket.   "
        />
        <Cartoon src1={cartoon} alt1="cartoon man rushing around" text={arr} />
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
