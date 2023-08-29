import React from "react";
import { Link } from "react-router-dom";
import HomeLogo from "../../assets/home-logo.svg";
import { styled } from "styled-components";
const HeaderLogo = () => {
  return (
    <Logo>
      <Link to="/home">
        <img src={HomeLogo} alt="Home logo" />
      </Link>
    </Logo>
  );
};

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0;
`;

export default HeaderLogo;
