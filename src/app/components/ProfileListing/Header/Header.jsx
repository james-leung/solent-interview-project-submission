import React from "react";
import { HeaderWrapper } from "./Header.styled";
import SearchBar from "./SearchBar/SearchBar";

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h1>Find a member or staff</h1>
              <h3 className="mt-3 mb-5">Use the search box to get started</h3>
              <SearchBar></SearchBar>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </HeaderWrapper>
    );
  }
}

export default Header;
