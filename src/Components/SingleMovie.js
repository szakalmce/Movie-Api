import React from "react";
import { useLocation } from "react-router-dom";

const SingleMovie = () => {
  const location = useLocation();

  // destructuring state
  const { title } = location.state;

  return <div>{title}</div>;
};

export default SingleMovie;
