import React from "react";
import { SearchBarWrapper } from "./SearchBar.styled";
import { searchProfile, filterProfiles } from "../../actions/actions";
import { connect } from "react-redux";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange = (e) => {
    this.props.updateSearch(e.target.value);
    this.props.filterProfiles(e.target.value);
  };

  render() {
    return (
      <>
        <div className="input-group">
          <SearchBarWrapper
            className="form-control"
            type="text"
            placeholder="Start typing..."
            aria-label="Search"
            onChange={this.onChange}
          ></SearchBarWrapper>
          <div className="input-group-append">
            <label className="input-group-text">
              <i className="fa fa-search"></i>
            </label>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  searchParam: state.profileReducer.searchParam,
  profiles: state.profileReducer.profiles,
});

const mapDispatchToProps = (dispatch) => ({
  updateSearch: (searchParam) => dispatch(searchProfile(searchParam)),
  filterProfiles: (searchParam) => dispatch(filterProfiles(searchParam)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
