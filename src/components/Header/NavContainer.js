import React from "react";
import { styled } from "styled-components";
import NavListItem from "./NavListItem";
import NavHome from "../../assets/nav-home.svg";
import NavMessage from "../../assets/nav-messaging.svg";
import NavNetwork from "../../assets/nav-network.svg";
import NavJob from "../../assets/nav-jobs.svg";
import NavNotification from "../../assets/nav-notifications.svg";
import UserNavList from "./UserNavList";
import WorkNavList from "./WorkNavList";
const NavContainer = () => {
  return (
    <Nav>
      <NavListWrap>
        <NavListItem src={NavHome} title="Home" active="active" />
        <NavListItem src={NavNetwork} title="Network" />
        <NavListItem src={NavJob} title="Jobs" />
        <NavListItem src={NavMessage} title="Message" />
        <NavListItem src={NavNotification} title="Notifications" />
        <UserNavList />
        <WorkNavList />
      </NavListWrap>
    </Nav>
  );
};

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;
const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

export default NavContainer;
