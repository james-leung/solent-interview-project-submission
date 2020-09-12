import React from "react";
import { HeaderWrapper, RowWrapper } from "./Header.styled";
import SearchBar from "./SearchBar/SearchBar";

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <RowWrapper className="col-md-8">
              <h1>Find a member or staff</h1>
              <p className="mt-3 mb-5">Type below to get started:</p>
              <SearchBar></SearchBar>
            </RowWrapper>
            <div className="col-md-2"></div>
          </div>
        </div>
      </HeaderWrapper>
    );
  }
}

export default Header;
