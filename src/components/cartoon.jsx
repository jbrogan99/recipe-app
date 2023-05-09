import React from "react";
import bubble from "../cartoon-images/bubble-new-min.png";
export const Cartoon = ({ alt1, text, src1 }) => {
  return (
    <>
      <div className="cartoon-all-container">
        <img src={src1} alt={alt1} className="cartoon" />
        <div className="flex-container-bubble">
          <div className="bubble-text-container">
            <img src={bubble} alt="thought bubble" />

            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};
