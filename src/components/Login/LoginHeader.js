import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginImage from "../../assets/login-logo.svg";
const LoginHeader = () => {
  return (
    <Nav>
      <Link to="/">
        <img src={LoginImage} alt="Login image" />
      </Link>

      <div>
        <Join>Join Now</Join>
        <SignIn>Sign In</SignIn>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  max-width: 1128px;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;
const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  border-radius: 4px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

export default LoginHeader;
