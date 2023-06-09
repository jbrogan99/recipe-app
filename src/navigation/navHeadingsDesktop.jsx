import React from "react";
import { Link } from "react-router-dom";
export const NavHeadingsDesktop = ({ setActivePage, activePage }) => {
  const handleClick = (page) => {
    setActivePage(page);
  };
  return (
    <>
      <section className="nav-container">
        <ul className="nav-ul">
          <li className={`${activePage === "home" ? "active-nav" : ""}`}>
            <Link to="/" onClick={() => handleClick("home")}>
              Home
            </Link>
          </li>
          <li
            className={`${activePage === "shoppingList" ? "active-nav" : ""}`}
          >
            <Link
              to="/shoppingList"
              onClick={() => handleClick("shoppingList")}
            >
              Shopping List
            </Link>
          </li>
        </ul>
        <nav>
          <ul className="nav-ul">
            <li className="dropdown">
              <a href="#">Meal Types</a>
              <ul>
                <li
                  className={` ${
                    activePage === "hungover" ? "active-nav" : ""
                  }`}
                >
                  {" "}
                  <Link to="/hungover" onClick={() => handleClick("hungover")}>
                    Hungover
                  </Link>
                </li>

                <li
                  className={`${activePage === "weather" ? "active-nav" : ""}`}
                >
                  {" "}
                  <Link to="/weather" onClick={() => handleClick("weather")}>
                    Food for Weather
                  </Link>
                </li>
                <li className={`${activePage === "work" ? "active-nav" : ""}`}>
                  {" "}
                  <Link to="/work" onClick={() => handleClick("work")}>
                    Food for Work
                  </Link>
                </li>
                <li
                  className={`${activePage === "travel" ? "active-nav" : ""}`}
                >
                  {" "}
                  <Link to="/travel" onClick={() => handleClick("travel")}>
                    One Stop Shop
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};
