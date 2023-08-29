import React from "react";
import WorkImage from "../../assets/nav-work.svg";
import DownArrow from "../../assets/down-icon.svg";
import { styled } from "styled-components";
const WorkNavList = () => {
  return (
    <Work>
      <a>
        <img src={WorkImage} alt="work image" />
        <span>
          Work
          <img src={DownArrow} alt="down arrow image" />
        </span>
      </a>
    </Work>
  );
};

const Work = styled.li`
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

  border-left: 1px solid rgba(0, 0, 0, 0.08);
  @media (max-width: 575px) {
    display: none;
  }
`;

export default WorkNavList;
