import React from "react";
import styled from "styled-components";
import { path } from "../Utils/Paths/img";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  border: 1px solid red;
`;

const ImgWrapper = styled.div``;
const Img = styled.img`
  width: 100%;
  display: block;
`;

const MovieListItem = ({ title, poster_path }) => {
  return (
    <Wrapper>
      <NavLink state={{ title, poster_path }} to={`moves/${title}`}>
        <Img src={`${path}${poster_path}`} />
      </NavLink>
    </Wrapper>
  );
};

export default MovieListItem;
