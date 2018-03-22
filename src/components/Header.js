import React from "react";
import Link from "gatsby-link";
//import styled from "styled-components";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;



const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  font-family: roboto;
  font-style: italic;
  letter-spacing: 3px;
  text-decoration: none;
  color: #455A64;
`;

const NavItem = styled(Link)`
  display: inline-block;
  bottom: 0px;
  margin-right: 1rem;
  font-family: roboto;
  font-style: italic;
  letter-spacing: 2px;
  text-decoration: none;
  color: #455A64;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = ({ title }) => (
  <Container>
    <Logo to="/">{title}</Logo>

    <nav>
      <NavItem to="/about">/about me</NavItem>
      <NavItem to="/projects">/ongoing projects</NavItem>
    </nav>
  </Container>
);

export default Header;
