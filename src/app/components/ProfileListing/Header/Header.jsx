import React from "react";
import connect from "react-redux";
import { HeaderWrapper } from "./Header.styled";
import SearchBar from "./SearchBar/SearchBar";
import { searchProfile } from "../actions/actions";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderWrapper className="jumbotron row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <h1>Find a member or staff</h1>
          <p className="mt-3 mb-5">Type below to get started:</p>
          <SearchBar></SearchBar>
        </div>
        <div className="col-md-2"></div>
      </HeaderWrapper>
    );
  }
}

export default Header;
