import React from "react";
import Profile from "./Profile";

class ProfileItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = new Profile(props.profile);
  }

  render() {
    const { firstName, lastName } = this.state;
    return (
      <>
        <li className="list-group-item">
          {firstName} {lastName}
        </li>
      </>
    );
  }
}

export default ProfileItem;
