import React from "react";
import { Link } from "react-router-dom";
export const NavHeadings = ({
  showResults,
  setActivePage,
  setShowResults,
  activePage,
}) => {
  const handleClick = (page) => {
    setActivePage(page);
    setShowResults(!showResults);
  };
  return (
    <>
      {showResults ? (
        <nav className="dropdown">
          <ul className="meal-types">
            <li key={"meals"} className="">
              Meal Types
            </li>
            <li
              key={"hungover"}
              className={`nav-options ${
                activePage === "hungover" ? "active-nav" : "nav-options"
              }`}
            >
              {" "}
              <Link to="/hungover" onClick={() => handleClick("hungover")}>
                Hungover
              </Link>
            </li>

            <li
              key={"weather"}
              className={`${activePage === "weather" ? "active-nav" : ""}`}
            >
              {" "}
              <Link to="/weather" onClick={() => handleClick("weather")}>
                Food for Weather
              </Link>
            </li>
            <li
              key={"work"}
              className={`${activePage === "work" ? "active-nav" : ""}`}
            >
              {" "}
              <Link to="/work" onClick={() => handleClick("work")}>
                Food for Work
              </Link>
            </li>
            <li
              key={"travel"}
              className={`${activePage === "travel" ? "active-nav" : ""}`}
            >
              {" "}
              <Link to="/travel" onClick={() => handleClick("travel")}>
                One Stop Shop
              </Link>
            </li>
          </ul>
          <ul className="pages">
            <li key={"pages"}>Pages</li>
            <li
              key={"home"}
              className={`${activePage === "home" ? "active-nav" : ""}`}
            >
              <Link to="/" onClick={() => handleClick("home")}>
                Home
              </Link>
            </li>
            <li
              key={"shoppingList"}
              className={`${activePage === "shoppingList" ? "active-nav" : ""}`}
            >
              {" "}
              <Link
                to="/shoppingList"
                onClick={() => handleClick("shoppingList")}
              >
                Shopping List
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
};
