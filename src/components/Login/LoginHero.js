import React from "react";
import { styled } from "styled-components";
import LoginHeroImage from "../../assets/login-hero.svg";
const LoginHero = () => {
  return (
    <Hero>
      <h1>Welcome to your professional community</h1>
      <img src={LoginHeroImage} alt="Login hero image" />
    </Hero>
  );
};

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 22px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

export default LoginHero;
