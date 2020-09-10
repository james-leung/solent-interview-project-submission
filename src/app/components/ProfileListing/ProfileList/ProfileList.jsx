import React from "react";
import ProfileModal from "./ProfileModal/ProfileModal";

export default ({ filteredProfiles, setProfileIndex }) => {
  return (
    <div className="container">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-2"></div>
        {/* Profile listing */}
        <div className="col-md-8">
          <ul className="list-group">
            {filteredProfiles.map((profile, i) => (
              <li
                className="list-group-item"
                key={i}
                data-toggle="modal"
                data-target="#profileModal"
                onClick={() => setProfileIndex(i)}
              >
                {profile.name.first} {profile.name.last}
              </li>
            ))}
          </ul>
        </div>
        {/* Right sidebar */}
        <div className="col-md-2"></div>
      </div>

      {/* Modal */}
      {filteredProfiles && <ProfileModal></ProfileModal>}
    </div>
  );
};
