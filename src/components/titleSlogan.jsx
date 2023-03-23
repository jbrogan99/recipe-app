import React from "react";

export const TitleSlogan = ({ title, slogan }) => {
  return (
    <>
      <div className="title-slogan-container">
        <h2>{title}</h2>
        <p>{slogan}</p>
      </div>
    </>
  );
};
