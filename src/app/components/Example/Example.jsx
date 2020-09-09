import React from "react";
import { Wrapper } from "./Example.styled";
import ProfileList from "./ProfileList/ProfileList";

import axios from "axios";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
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
      <Wrapper>
        {this.state.profiles.length > 0 && (
          <ProfileList profiles={this.state.profiles}></ProfileList>
        )}
      </Wrapper>
    );
  }
}

export default Example;
