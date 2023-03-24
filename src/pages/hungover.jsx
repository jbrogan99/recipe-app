import React, { useEffect, useState } from "react";
import { Cartoon } from "../components/cartoon";
import { TitleSlogan } from "../components/titleSlogan";
import cartoon from "../images/hungover-cartoon-min.png";
import bubble from "../images/bubble.png";
import { MealList } from "../components/mealList";
export const Hungover = () => {
  const arr = [
    "I just want",
    <br />,
    "something quick and",
    <br />,
    "easy, help me!",
  ];

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
      <main>
        <MealList />
      </main>
    </>
  );
};
