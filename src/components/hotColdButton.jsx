import React from "react";

export const HotColdButton = ({ hot, cold }) => {
  return (
    <section weather-button-container>
      <div id="hot-container" onClick={hot}>
        <p id="hot">Hot</p>
      </div>
      <div id="cold-container" onClick={cold}>
        <p id="cold">cold</p>
      </div>
    </section>
  );
};
