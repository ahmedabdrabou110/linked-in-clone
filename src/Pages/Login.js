import React from "react";
import { styled } from "styled-components";
import LoginHeader from "../components/Login/LoginHeader";
import LoginHero from "../components/Login/LoginHero";
import LoginButton from "../components/Login/LoginButton";

const Login = () => {
  return (
    <Container>
      <LoginHeader />
      <Section>
        <LoginHero />
        <LoginButton />
      </Section>
    </Container>
  );
};

const Container = styled.section`
  padding: 0;
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 130px;
  padding-top: 40px;
  padding: 40px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

export default Login;
