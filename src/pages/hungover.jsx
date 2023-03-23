import React, { useEffect, useState } from "react";
import { Cartoon } from "../components/cartoon";
import { TitleSlogan } from "../components/titleSlogan";
import cartoon from "../images/hungover-cartoon-min.png";
import bubble from "../images/bubble.png";
export const Hungover = () => {
  const arr = [
    "I just want",
    <br />,
    "something quick and",
    <br />,
    "easy, help me!",
  ];

  const [mealData, setMealData] = useState(null);

  const url =
    "https://api.spoonacular.com/recipes/informationBulk?apiKey=c928226c90814b6abab015fdd892513b&ids=1062883,665175,715495,661460,1515523,665193,1095938,1450327,704655,643612,641220,022743,638780,638649,642809,1460497,157459,37264,645687,36676,1098351,42583&includeNutrition=true";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("this is the data", data);
        setMealData(data);
      });
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
          src2={bubble}
          alt1="cartoon man hungover"
          text={arr}
        />
      </section>
      <main></main>
    </>
  );
};
