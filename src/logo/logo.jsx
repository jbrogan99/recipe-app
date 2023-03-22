import React from "react";
import logo from "../images/Health-logo.png";
export const Logo = ({ width, height }) => {
  return (
    <>
      <img
        src={logo}
        alt="healthy logo"
        width={width}
        height={height}
        className="logo"
      />
      <h2 className="nutrition-logo">Nutriton</h2>
    </>
  );
};
