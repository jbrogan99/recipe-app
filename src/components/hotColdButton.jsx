import React from "react";

export const HotColdButton = ({ hot, cold, activeButton, hotUrl, coldUrl }) => {
  return (
    <div id="weather-button-container">
      <div id="hot-container" onClick={() => hot("hot", hotUrl)}>
        <a
          href="#"
          id="hot"
          className={`${
            activeButton === "hot"
              ? "active-button-hot btn3 btn custom-btn-width"
              : "btn3 btn custom-btn-width"
          }`}
        >
          Hot
        </a>
      </div>
      <div id="cold-container" onClick={() => cold("cold", coldUrl)}>
        <a
          href="#"
          id="cold"
          className={`${
            activeButton === "cold"
              ? "active-button-cold btn3 btn custom-btn-width"
              : "btn3 btn custom-btn-width"
          }`}
        >
          Cold
        </a>
      </div>
    </div>
  );
};
