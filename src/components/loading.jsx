import React from "react";
import { ReactComponent as Spinner } from "../images/Spinner-new.svg";

const Loading = () => {
  return (
    <div className="loading">
      <p>Hold on, where just getting the recipes for you now, wont be long!</p>
      <Spinner className="spinner" />
    </div>
  );
};

export default Loading;
