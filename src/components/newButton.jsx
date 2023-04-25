import React from "react";
import { Link } from "react-router-dom";

export const NewButton = ({ text, route }) => {
  return (
    <div className="button-wrapper">
      <Link className="btn btn3" to={route}>
        {text}
      </Link>
    </div>
  );
};
