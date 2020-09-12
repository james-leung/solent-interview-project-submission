import React from "react";
import { HeaderWrapper } from "./HeaderWrapper.styled";
import Header from "./Header/Header";
import UpdatedProfileList from "./ProfileList/UpdatedProfileList";

import axios from "axios";
import { connect } from "react-redux";
import { setProfiles, filterProfiles } from "./actions/actions";

class ProfileListingApp extends React.Component {
  componentDidMount = () => {
    if (!this.props.loaded) {
      axios.get("https://randomuser.me/api/?results=10&nat=gb").then((res) => {
        // After request, save profiles to redux store
        this.props.setProfiles(res.data.results);
      });
    }
  };

  render() {
    return (
      <>
        <HeaderWrapper>
          <Header></Header>
        </HeaderWrapper>
        <UpdatedProfileList></UpdatedProfileList>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  let { profiles } = state.profileReducer;
  return {
    loaded: profiles.length > 0,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setProfiles: (profiles) => {
    // Set all profiles
    dispatch(setProfiles(profiles));
    // Set filtered profiles (all profiles at the beginning)
    dispatch(filterProfiles(""));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileListingApp);
