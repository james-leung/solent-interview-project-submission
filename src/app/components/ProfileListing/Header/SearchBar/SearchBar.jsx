import React from "react";
import { SearchBarWrapper } from "./SearchBar.styled";
import { toggleToDo } from "../../actions/actions";
import { connect } from "react-redux";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  onKeyDown(e) {
    dispatch(toggleToDo(e.searchParams));
  }

  render() {
    return (
      <SearchBarWrapper>
        <input
          className="form-control"
          type="text"
          placeholder="Start typing..."
          aria-label="Search"
          onKeyDown={this.onKeyDown}
        ></input>
      </SearchBarWrapper>
    );
  }
}

export default connect()(SearchBar);
