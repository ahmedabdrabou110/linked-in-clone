import React from "react";
import GoogleImage from "../../assets/google.svg";
import { styled } from "styled-components";
const LoginButton = () => {
  return (
    <Form>
      <Google>
        <img src={GoogleImage} alt="Google Image" />
        Sign in with Google
      </Google>
    </Form>
  );
};

const Form = styled.div`
  margin-top: 100px;
  width: 400px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 /0%),
    inset 0 0 0 1px rgb(0 0 0 / 0%);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

export default LoginButton;
