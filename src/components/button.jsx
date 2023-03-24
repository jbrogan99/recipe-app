import React from "react";

export const Button = ({ text, link }) => {
  return (
    <a href={link} className="explore">
      {text}
    </a>
  );
};
