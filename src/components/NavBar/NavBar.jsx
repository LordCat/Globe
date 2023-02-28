import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
  width: 91%;
  position: absolute;
  background-color: Black;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: top;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  z-index: 100;
  border: 4px solid green;
  border-radius: 10px;
  top: 0;
  color: green;
`;

const Logo = styled.h1`
  margin: 0;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`;

const NavLink = styled.li`
  margin-left: 1rem;
`;

export function NavBar() {
  return (
    <NavContainer>
      <Logo>My Website</Logo>
      <NavLinks>
        <NavLink>
        <Link to="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link to="/About">About</Link>
        </NavLink>
      </NavLinks>
    </NavContainer>
  );
}