import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import banner from "../../images/green.jpg";
import { RecipeFinder } from "../../recipie-finder";
import beanChilliWrap from "../../images/bean_and_rice_burrito_33565_16x9.jpg";
import pork from "../../images/chilli-pork.jpg";
import soup from "../../images/soup-min.jpg";
import salad from "../../images/salad.jpg";
import pasta1 from "../../images/healthy-pasta-recipes.jpeg";
import pasta2 from "../../images/healthy-pasta.jpg";
import burger from "../../images/hamburger-food.jpg";
import carbonara from "../../images/carbonara.jpg";
export const Home = () => {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div>
      <img src={banner} onDragStart={handleDragStart} alt="presentation" />
      <p>Hello</p>
    </div>,
    <img src={banner} onDragStart={handleDragStart} alt="presentation" />,
    <img src={banner} onDragStart={handleDragStart} alt="presentation" />,
  ];

  // useEffect(() => {
  //   const url =
  //     "https://api.spoonacular.com/recipes/informationBulk?apiKey=0967c5b1dbcb4b5a84457c3b31b70645&ids=1096058,1095895,157399,636769,642619,715497";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch(() => {
  //       console.log("error");
  //     });
  // });

  const [meal, setMeal] = useState(null);

  return (
    <>
      <section className="banner">
        <img src={banner} alt="banner with text" />
        <p className="white inter-font" id="banner-text1">
          Want <span>affordable, quick, healthy </span> meals?
        </p>
        <p className="white inter-font" id="banner-text2">
          Check out our meals to suit your needs
        </p>
      </section>
      <div className="carousel-header">
        <h2 className="work-sans-font">A Few Favorites</h2>
      </div>
      <section className="carousel">
        <AliceCarousel mouseTracking items={items} />
      </section>
      <main className="pastel-background recipe-finder-container">
        <RecipeFinder
          title="Feeling"
          lastLetter={` ${"Hungover?"}`}
          slogan="Have you had one too many?"
          url1={beanChilliWrap}
          url2={pork}
          info="Enjoy some of our easy, tasty and nutritional dishes, cooks in under 10 minutes"
          alt1="bean and rice wrap"
          alt2="chilli pork"
        />
        <RecipeFinder
          title="Hows the"
          lastLetter={` ${"Weather?"}`}
          slogan="Is it wet and rainy, or is the sun beaming down?"
          url1={soup}
          url2={salad}
          info="Whatever the weather, we’ve got the dishes you need!"
          alt1="tomato soup"
          alt2="chicken salad"
        />
        <RecipeFinder
          title="Food for"
          lastLetter={` ${"Work?"}`}
          slogan="Sick of spending money on overpriced foods at work? "
          url1={pasta1}
          url2={pasta2}
          info="We have a great selection of healthy re-heatable meals for you to take into work! "
          alt1="beef pasta with sweetcorn"
          alt2="tagliatelle pasta with herbs"
        />
        <RecipeFinder
          title="No Time to "
          lastLetter={` ${"Travel?"}`}
          slogan="Do you have to travel to find the right ingredients? "
          url1={burger}
          url2={carbonara}
          info="All the ingredients for the dishes can be found in any budget supermarket"
          alt1="hamburger"
          alt2="carbonara"
        />
      </main>
    </>
  );
};
