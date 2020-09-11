import React from "react";
import { connect } from "react-redux";
import ProfileDetail from "./ProfileDetail";

const ProfileModal = ({ profile }) => (
  <div
    className="modal fade"
    id="profileModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="profileModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="profileModalLabel">
            {profile && profile.name.first}'s Profile
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {profile && <ProfileDetail {...profile}></ProfileDetail>}
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  const { profiles, profileIndex } = state.profileReducer;
  const profile = profiles[profileIndex];
  return { profiles, profileIndex, profile };
};

export default connect(mapStateToProps)(ProfileModal);
