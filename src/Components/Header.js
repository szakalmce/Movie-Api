import React from "react";
import styled from "styled-components";
import { Container } from "../Styles/globalStyles";

import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  background-color: #ddd;
  padding: 2rem 0;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h1``;

const Button = styled.button`
  padding: 0.25rem 0.5rem;
  margin: 0 0.5rem;

  &:last-child {
    margin-right: 0;
  }

  a {
    text-decoration: none;
  }
  a.active {
    color: red;
  }
`;

const Nav = styled.nav``;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Inner>
          <Title>MOVIE APP 2022</Title>
          <Nav>
            <Button>
              <NavLink to="/">All</NavLink>
            </Button>
            <Button>
              <NavLink to="/watchlist">Watchlist</NavLink>
            </Button>
            <Button>
              <NavLink to="/watched">Watched</NavLink>
            </Button>
          </Nav>
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default Header;
