import React, { useEffect, useState } from "react";
import { Cartoon } from "../components/cartoon";
import { TitleSlogan } from "../components/titleSlogan";
import cartoon from "../images/hungover-cartoon-min.png";

import { MealList } from "../components/mealList";
export const Hungover = () => {
  const arr = [
    "I just want",
    <br />,
    "something quick",
    <br />,
    "and easy, help me!",
  ];
  //uni account - spoonacular - https://api.spoonacular.com/recipes/informationBulk?apiKey=0967c5b1dbcb4b5a84457c3b31b70645&ids=1062883,665175,715495,661460,1515523,665193,1095938,1450327,704655,643612,641220,022743,638780,638649,642809,1460497,157459,37264,645687,36676,1098351,42583&includeNutrition=true
  return (
    <>
      <section className="top-info-container">
        <TitleSlogan
          title="Hungover?"
          slogan="We know what its like, so we’ve put together a great selection of meals for you to choose from. Quick, easy and tasty!  "
        />
        <Cartoon src1={cartoon} alt1="cartoon man hungover" text={arr} />
      </section>
      <MealList url="" />
    </>
  );
};
