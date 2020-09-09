import React from "react";
import ProfileItem from "./ProfileItem/ProfileItem";

class ProfileList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.profiles);
    this.state = { profiles: props.profiles };
  }

  // componentDidMount() {
  //   console.log(this.state.profiles);
  // }

  render() {
    return (
      <>
        <ul>
          {this.state.profiles.map((profile, i) => (
            <ProfileItem profile={profile} key={i}></ProfileItem>
          ))}
        </ul>
      </>
    );
  }
}

export default ProfileList;
