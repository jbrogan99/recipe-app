import React from "react";
import { ReactComponent as Spinner } from "../images/Spinner-new.svg";

const Loading = () => {
  return (
    <div className="loading">
      <Spinner className="spinner" />
    </div>
  );
};

export default Loading;
