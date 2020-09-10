import React from "react";
import Profile from "./Profile";

class ProfileItem extends React.Component {
  constructor(props) {
    super(props);
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.key = props.keyProp;
  }

  render() {
    return (
      <>
        <li className="list-group-item" key={this.key}>
          {this.firstName} {this.lastName}
        </li>
      </>
    );
  }
}

export default ProfileItem;
