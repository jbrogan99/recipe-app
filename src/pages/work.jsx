import React from "react";
import { Cartoon } from "../components/cartoon";
import { TitleSlogan } from "../components/titleSlogan";
import cartoon from "../images/work-cartoon.png";
import bubble from "../images/bubble-new.png";
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
  //work url = https://api.spoonacular.com/recipes/informationBulk?apiKey=c928226c90814b6abab015fdd892513b&ids=638586,1098303,661676,657159,658517,648479,632797,636488,632795,660400,157473,769754,650871,637473,637210,654911,649122,634854,645261,658535,648712,644785,664491&includeNutrition=true
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
      <MealList url="https://api.spoonacular.com/recipes/informationBulk?apiKey=10320504da754f4a83b42468d49cb216&ids=638586,1098303,661676,657159,658517,648479,632797,636488,632795,660400,157473,769754,650871,637473,637210,654911,649122,634854,645261,658535,648712,644785,664491&includeNutrition=true" />
    </>
  );
};
