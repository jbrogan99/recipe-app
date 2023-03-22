import React from "react";
import hamburger from "../images/hamburger-img.png";
export const Hamburger = () => {
  return (
    <div className="hamburger-container">
      <img src={hamburger} alt="hamburger menu" width="80vw" height="60vh" />
    </div>
  );
};
