import React from "react";
import ProfileImageWrapper from "./ProfileImageWrapper";
import ProfilePreviewWrapper from "../ProfileModal/ProfileDetail/ProfilePreviewWrapper";

export default ({ name, picture, email }) => (
  <div className="d-flex justify-content-between align-items-center">
    <ProfilePreviewWrapper>
      <ProfileImageWrapper src={picture.thumbnail} alt={email} /> {name.first}{" "}
      {name.last}
    </ProfilePreviewWrapper>
    <img src="/static/icons/circle-arrow.svg" className="icon-2" />
  </div>
);
