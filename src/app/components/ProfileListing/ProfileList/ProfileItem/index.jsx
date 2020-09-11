import React from "react";
import ProfileImageWrapper from "./ProfileImageWrapper";

export default ({ name, picture, email }) => (
  <div className="d-flex justify-content-between">
    <div>
      <ProfileImageWrapper src={picture.thumbnail} alt={email} />
      {name.first} {name.last}
    </div>
    <i className="fas fa-3x fa-arrow-alt-circle-right"></i>
  </div>
);
