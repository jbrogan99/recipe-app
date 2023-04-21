import React from "react";

export const Button = ({ text, link }) => {
  return (
    <div className="button-wrapper">
      <a href={link} className="btn btn3">
        {text}
      </a>
    </div>
  );
};
