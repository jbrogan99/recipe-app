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
      <MealList url="https://api.spoonacular.com/recipes/informationBulk?apiKey=c928226c90814b6abab015fdd892513b&ids=1161746,1003670,1459207,1095938,1022743,639722,644306,157089,641220,1502523,1095794,157259,1099404,642138,639948,1505411,1003210,637260,1697665,1697645,1697531,636602,390813,621204,654435,660588,1697553,796684,1512847,1070648&includeNutrition=true" />
    </>
  );
};
