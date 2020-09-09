import React from "react";
import { HeaderWrapper } from "./HeaderWrapper.styled";
import Header from "./Header/Header";
import { ListingWrapper } from "./ListingWrapper.styled";
// import ProfileList from "./ProfileList/ProfileList";
import UpdatedProfileList from "./ProfileList/UpdatedProfileList";

import axios from "axios";

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
      // console.log(this.state.profiles);
    });
  }

  render() {
    return (
      <>
        <HeaderWrapper>
          <Header></Header>
        </HeaderWrapper>
        <ListingWrapper>
          {this.state.profiles.length > 0 && (
            <UpdatedProfileList
              profiles={this.state.profiles}
            ></UpdatedProfileList>
          )}
        </ListingWrapper>
      </>
    );
  }
}

export default ProfileListingApp;
