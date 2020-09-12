import React from "react";
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
          <input
            className="form-control"
            type="text"
            placeholder="Start typing..."
            aria-label="Search"
            onChange={this.onChange}
          ></input>
          <div className="input-group-append">
            <label className="input-group-text">
              <img src="/static/icons/seach.svg" className="icon"></img>
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
