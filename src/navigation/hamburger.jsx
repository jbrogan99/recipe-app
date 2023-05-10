import React from "react";
import hamburger from "../images/hamburger-img.png";
export const Hamburger = ({ setShowResults, showResults }) => {
  return (
    <div className="hamburger-container">
      <img
        className="hamburger-img"
        src={hamburger}
        alt="hamburger menu"
        onClick={() => setShowResults(!showResults)} /*toggle the results*/
      />
    </div>
  );
};
