import React from "react";
import { styled } from "styled-components";
import LoginHeader from "../components/Login/LoginHeader";

const Login = () => {
  return (
    <Container>
      <LoginHeader />
    </Container>
  );
};

const Container = styled.section`
  padding: 0;
`;

export default Login;
