import React, { useState, useEffect } from "react";
import { Cartoon } from "../components/cartoon";
import { TitleSlogan } from "../components/titleSlogan";
import cartoon from "../cartoon-images/travel-cartoon.png";
import { MealList } from "../components/mealList";
export const Travel = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [mealData, setMealData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url =
    "https://api.spoonacular.com/recipes/informationBulk?apiKey=b34d94043fd14dcd993bc288b3a8b117&ids=1161746,1003670,1459207,1095938,1022743,639722,644306,157089,641220,1502523,1095794,157259,1099404,642138,639948,1505411,1003210,637260,1697665,1697645,1697531,636602,390813,621204,654435,660588,1697553,796684,1512847,1070648&includeNutrition=true";
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
