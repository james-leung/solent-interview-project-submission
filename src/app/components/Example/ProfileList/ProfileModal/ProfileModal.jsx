import React from "react";

class ProfileModal extends React.Component {
  constructor(props) {
    super(props);
    const { key, profile } = props;
    this.state = { key, profile };
  }

  render() {
    return (
      <>
        <li key={this.state.key}>{this.state.profile.name}</li>
      </>
    );
  }
}

export default ProfileModal;
