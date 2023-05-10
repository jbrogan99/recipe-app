import React, { useEffect, useState } from "react";
import { Cartoon } from "../components/cartoon";
import { TitleSlogan } from "../components/titleSlogan";
import cartoon from "../images-real/hungover-man.jpg";
import { MealList } from "../components/mealList";
export const Hungover = () => {
  const netlifyUrl =
    "https://recipe-jbrogan.netlify.app/.netlify/functions/hungoverrecipes";
  const [errorMessage, setErrorMessage] = useState(false);
  const [mealData, setMealData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(netlifyUrl);
      if (!response.ok) {
        setErrorMessage(true);
      } else {
        const data = await response.json();
        setMealData(data.hungoverResults);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <section className="top-info-container">
        <TitleSlogan
          title="Hungover?"
          slogan="We know what its like, so we’ve put together a great selection of meals for you to choose from. Quick, easy and tasty!  "
        />
        <Cartoon
          src1={cartoon}
          alt1="cartoon man hungover"
          text={"I just want something quick and easy, help me!"}
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
