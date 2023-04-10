import React from "react";

export const HotColdButton = ({ hot, cold, activeButton }) => {
  return (
    <section id="weather-button-container">
      <div id="hot-container" onClick={() => hot("hot")}>
        <button
          id="hot"
          className={`${
            activeButton === "hot"
              ? "active-button-hot button-border"
              : "button-border"
          }`}
        >
          Hot
        </button>
      </div>
      <div id="cold-container" onClick={() => cold("cold")}>
        <button
          id="cold"
          className={`${
            activeButton === "cold"
              ? "active-button-cold button-border"
              : "button-border"
          }`}
        >
          Cold
        </button>
      </div>
    </section>
  );
};
