import React, { useEffect, useState } from "react";
import { Cartoon } from "../components/cartoon";
import { TitleSlogan } from "../components/titleSlogan";
import cartoon from "../cartoon-images/hungover-cartoon-min.png";
import { MealList } from "../components/mealList";
export const Hungover = () => {
  const arr = [
    "I just want",
    <br />,
    "something quick",
    <br />,
    "and easy, help me!",
  ];

  const url = "http://localhost:3001/recipesHungover";
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
        setMealData(data.hungoverResults);
        setIsLoading(false);
        console.log("meal data", data.hungoverResults);
      }
    }
    fetchData();
  }, []);

  console.log("data use state", mealData);

  return (
    <>
      <section className="top-info-container">
        <TitleSlogan
          title="Hungover?"
          slogan="We know what its like, so we’ve put together a great selection of meals for you to choose from. Quick, easy and tasty!  "
        />
        <Cartoon src1={cartoon} alt1="cartoon man hungover" text={arr} />
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
