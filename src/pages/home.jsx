import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import banner from "../images/green.jpg";
import { RecipeFinder } from "../recipie-finder";
import beanChilliWrap from "../images/bean_and_rice_burrito_33565_16x9.jpg";
import pork from "../images/chilli-pork.jpg";
import soup from "../images/soup-min.jpg";
import salad from "../images/salad.jpg";
import pasta1 from "../images/healthy-pasta-recipes.jpeg";
import pasta2 from "../images/healthy-pasta.jpg";
import burger from "../images/hamburger-food.jpg";
import carbonara from "../images/carbonara.jpg";
import { Favorites } from "../components/favourites";
export const Home = ({ setActivePage }) => {
  // const handleDragStart = (e) => e.preventDefault();

  // // const [favoritesData, setFavoritesData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   async function fetchData(url) {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setFavoritesData(data);
  //     setIsLoading(false);
  //     console.log("favourites data", favoritesData);
  //     console.log("favourites [0]", favoritesData[0]);
  //     console.log("favourites image", favoritesData[0].image);
  //     console.log("favourites title", favoritesData[0].title);
  //   }
  //   fetchData(
  //     "https://api.spoonacular.com/recipes/informationBulk?apiKey=10320504da754f4a83b42468d49cb216&ids=643674,1095711,1697621,1062883&642701,1070648&includeNutrition=true"
  //   );
  // }, []);

  function favoritesGallery() {
    const items = [
      <Favorites index={0} />,
      <Favorites index={1} />,
      <Favorites index={2} />,
      <Favorites index={3} />,
      <Favorites index={4} />,
      <Favorites index={5} />,
    ];
    return items;
  }
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
        <AliceCarousel mouseTracking items={favoritesGallery()} />
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
          setActivePage={setActivePage}
          link="hungover"
          pageName="hungover"
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
          setActivePage={setActivePage}
          link="weather"
          pageName="weather"
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
          setActivePage={setActivePage}
          link="work"
          pageName="work"
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
          setActivePage={setActivePage}
          link="travel"
          pageName="travel"
        />
      </main>
    </>
  );
};
