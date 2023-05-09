import React from "react";
import hamburger from "../images/hamburger-img.png";
export const Hamburger = ({ setShowResults, showResults }) => {
  return (
    <div className="hamburger-container">
      <img
        src={hamburger}
        alt="hamburger menu"
        width="80vw"
        height="60vh"
        onClick={() => setShowResults(!showResults)} /*toggle the results*/
      />
    </div>
  );
};
