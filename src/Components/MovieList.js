import React from "react";

import styled from "styled-components";
import { Container } from "../Styles/globalStyles";
import MovieListItem from "./MovieListItem";

const Wrapper = styled.div`
  margin: 5rem 0;
`;

const MoviesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <Wrapper>
      <Container>
        <MoviesWrapper>
          {movies.map((movie) => (
            <MovieListItem key={movie.id} {...movie} />
          ))}
        </MoviesWrapper>
      </Container>
    </Wrapper>
  );
};

export default MovieList;
