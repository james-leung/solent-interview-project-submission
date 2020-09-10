import React from "react";
import { HeaderWrapper } from "./HeaderWrapper.styled";
import Header from "./Header/Header";
import { ListingWrapper } from "./ListingWrapper.styled";
// import ProfileList from "./ProfileList/ProfileList";
import UpdatedProfileList from "./ProfileList/UpdatedProfileList";

import axios from "axios";
import { connect } from "react-redux";
import { setProfiles } from "./actions/actions";

class ProfileListingApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: props.profiles,
    };
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=10&nat=gb").then((res) => {
      this.setState({ profiles: res.data.results });
      console.log(this.state.profiles);

      this.props.setProfiles(res.data.results);
    });
  }

  render() {
    return (
      <>
        <HeaderWrapper>
          <Header></Header>
        </HeaderWrapper>
        <ListingWrapper>
          {this.state.profiles && (
            <UpdatedProfileList
              profiles={this.state.profiles}
            ></UpdatedProfileList>
          )}
        </ListingWrapper>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setProfiles: (profiles) => dispatch(setProfiles(profiles)),
});

export default connect(null, mapDispatchToProps)(ProfileListingApp);
