import React from "react";
import { Cartoon } from "../components/cartoon";
import { TitleSlogan } from "../components/titleSlogan";
import cartoon from "../images/travel-cartoon.png";

import { MealList } from "../components/mealList";
export const Travel = () => {
  const arr = [
    "I don’t have time to",
    <br />,
    "go to Tesco, Asda,",
    <br />,
    "and Aldi. I just need",
    <br />,
    "one shop!",
  ];
  //personal account - spoonacular - 10320504da754f4a83b42468d49cb216
  return (
    <>
      <section className="top-info-container">
        <TitleSlogan
          title="One stop shop?"
          slogan="All in one place! Check out our recipes that only require one shop. To make it better you can get all ingredients from your local budget supermarket.   "
        />
        <Cartoon src1={cartoon} alt1="cartoon man rushing around" text={arr} />
      </section>
      <MealList url="" />
    </>
  );
};
