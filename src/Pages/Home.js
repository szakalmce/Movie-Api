import React from "react";
import MovieList from "../Components/MovieList";

const Home = ({ movies }) => {
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
