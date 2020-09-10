import React from "react";
import { connect } from "react-redux";

const ProfileModal = ({ profiles, profileIndex, profile }) => {
  return (
    <div
      className="modal fade"
      id="profileModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="profileModalLabel"
      aria-hidden="true"
    >
      {profile && (
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="profileModalLabel">
                {profile.name.first}
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
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { profiles, profileIndex } = state.profileReducer;
  const profile = profiles[profileIndex];
  console.log(profileIndex);
  console.log(profile);
  return { profiles, profileIndex, profile };
};

export default connect(mapStateToProps)(ProfileModal);
