import React from "react";
import ProfileItem from "./ProfileItem/ProfileItem";

class ProfileList extends React.Component {
  constructor(props) {
    super(props);

    this.profiles = props.profiles || [];
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-md-2"></div>
          {/* Profile listing */}
          <div className="col-md-8">
            <ul className="list-group">
              {this.profiles.map((profile, i) => (
                <ProfileItem profile={profile} key={i}></ProfileItem>
              ))}
            </ul>
          </div>
          {/* Right sidebar */}
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default ProfileList;
