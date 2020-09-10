import React from "react";
import { SearchBarWrapper } from "./SearchBar.styled";
import { searchProfile } from "../../actions/actions";
import { connect } from "react-redux";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  onKeyDown(e) {
    props.updateSearch(e.searchParams);
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

const mapDispatchToProps = (dispatch) => ({
  updateSearch: (searchParam) => dispatch(searchProfile(searchParam))
})

export default connect(mapDispatchToProps)(SearchBar);
