import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  margin-left:20px;
  color: black;
  font-weight: 500;
  text-shadow: 0 0 1px #000000;
  &.active {
    color: white;
    background-color: #ff6b08;
  }
`;