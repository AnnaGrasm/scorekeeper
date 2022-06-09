import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <nav>
      <LinkButton to="/">More Player</LinkButton>
      <LinkButton to="/play">Play</LinkButton>
    </nav>
  );
}

const LinkButton = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  border: 1px solid grey;
  border-radius: 8px;
  color: black;

  &.active {
    background-color: lightseagreen;
    color: white;
  }
`;
