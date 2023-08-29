// eslint-disable-next-line
import React from "react";
import SearchIconImage from "../../assets/search-icon.svg";
import { styled } from "styled-components";
const HeaderSearch = () => {
  return (
    <Search>
      <div>
        <input type="text" placeholder="Search ..." />
        <SearchIcon>
          <img src={SearchIconImage} alt="search icon" />
        </SearchIcon>
      </div>
    </Search>
  );
};

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 280px;

    input {
      border: none;
      box-shadow: none;
      background-color: #ecf3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      height: 34px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default HeaderSearch;
