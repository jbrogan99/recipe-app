import React from "react";

export const HotColdButton = ({ hot, cold, activeButton, hotUrl, coldUrl }) => {
  return (
    <section id="weather-button-container">
      <div id="hot-container" onClick={() => hot("hot", hotUrl)}>
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
      <div id="cold-container" onClick={() => cold("cold", coldUrl)}>
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
