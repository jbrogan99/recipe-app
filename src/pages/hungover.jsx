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

  const url =
    "https://api.spoonacular.com/recipes/informationBulk?apiKey=c928226c90814b6abab015fdd892513b&ids=1062883,665175,715495,661460,1515523,665193,1095938,1450327,704655,643612,641220,022743,638780,638649,642809,1460497,157459,37264,645687,36676,1098351,42583&includeNutrition=true";
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
