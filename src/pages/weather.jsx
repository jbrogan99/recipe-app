import React from "react";
import { Cartoon } from "../components/cartoon";
import { TitleSlogan } from "../components/titleSlogan";
import cartoon from "../images/work-cartoon.png";

import { MealList } from "../components/mealList";
export const Weather = () => {
  const arr = [];

  return (
    <>
      <section className="top-info-container">
        <TitleSlogan
          title="Food for Work?"
          slogan="Make one of our recipes the night before, and it will taste just as good the next day! "
        />
        <Cartoon
          src1={cartoon}
          alt1="cartoon man with hands on hs head, panicking"
          text={arr}
        />
      </section>
      <MealList url="" />
    </>
  );
};
