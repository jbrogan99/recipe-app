import React from "react";
import { useParams } from "react-router-dom";

export const RecipeInstructions = () => {
  const { id } = useParams();
  return (
    <>
      <div>the id is: {id}</div>
    </>
  );
};
