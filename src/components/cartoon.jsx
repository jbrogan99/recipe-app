import React from "react";

export const Cartoon = ({ alt1, text, src1, src2 }) => {
  return (
    <>
      <div className="cartoon-all-container">
        <img src={src1} alt={alt1} className="cartoon" />
        <div className="flex-container-bubble">
          <div className="bubble-text-container">
            <img src={src2} alt="thought bubble" />
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};
