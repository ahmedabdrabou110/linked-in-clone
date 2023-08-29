import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const NavListItem = ({ src, title  , active}) => {
  return (
    <NavList className={active}>
      <a>
        <img src={src} alt={title} />
        <span>{title}</span>
      </a>
    </NavList>
  );
};

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

export default NavListItem;
