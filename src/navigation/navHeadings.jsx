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
        <nav>
          <ul className="meal-types">
            <li>Meal Types</li>
            <li className={`${activePage === "hungover" ? "active-nav" : ""}`}>
              {" "}
              <Link to="/hungover" onClick={() => handleClick("hungover")}>
                Hungover
              </Link>
            </li>
            <li className={`${activePage === "work" ? "active-nav" : ""}`}>
              {" "}
              <Link to="/work" onClick={() => handleClick("work")}>
                Food for Work
              </Link>
            </li>
            <li
              className={`${
                activePage === "weather" ? "active-nav navText" : "navText"
              }`}
            >
              {" "}
              <Link to="/weather" onClick={() => handleClick("weather")}>
                Food for Weather
              </Link>
            </li>
            <li
              className={`${
                activePage === "oneShop" ? "active-nav navText" : "navText"
              }`}
            >
              {" "}
              <Link to="/travel" onClick={() => handleClick("travel")}>
                One Stop Shop
              </Link>
            </li>
          </ul>
          <ul className="pages">
            <li>Pages</li>
            <li
              className={`${
                activePage === "home" ? "active-nav navText" : "navText"
              }`}
            >
              <Link to="/" onClick={() => handleClick("home")}>
                Home
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
};
