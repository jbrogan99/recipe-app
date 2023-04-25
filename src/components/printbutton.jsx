import React from "react";

export const PrintButton = ({ text }) => {
  function handlePrint() {
    window.print();
  }

  return (
    <div className="button-wrapper">
      <a href="#" onClick={handlePrint} className="btn btn3">
        {text}
      </a>
    </div>
  );
};
