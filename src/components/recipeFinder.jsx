import React from "react";
import { Link } from "react-router-dom";

export const RecipeFinder = ({
  title,
  slogan,
  url1,
  url2,
  info,
  alt1,
  alt2,
  lastLetter,
  link,
  setActivePage,
  pageName,
}) => {
  return (
    <section className="recipe-container">
      <h2 data-text={lastLetter} className="title">
        {title}
      </h2>
      <div className="slogan-container">
        <p className="slogan">{slogan}</p>
      </div>
      <div className="side-by-side">
        <img src={url1} alt={alt1} />
        <img src={url2} alt={alt2} />
      </div>
      <p>{info}</p>
      <div className="button-wrapper">
        <Link
          to={link}
          onClick={() => setActivePage(pageName)}
          className="btn btn3"
        >
          Explore
        </Link>
      </div>
    </section>
  );
};
