import React from "react";

class ProfileItem extends React.Component {
  constructor(props) {
    super(props);
    const { key, profile } = props;
    this.state = {
      key,
      firstName: profile.name.first,
      lastName: profile.name.last,
    };
  }

  render() {
    const { key, firstName, lastName } = this.state;
    return (
      <>
        <li>
          {firstName} {lastName}
        </li>
      </>
    );
  }
}

export default ProfileItem;
