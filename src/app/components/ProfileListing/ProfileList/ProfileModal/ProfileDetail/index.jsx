import React from "react";
import ProfileDetailWrapper from "./ProfileDetailWrapper";
import ProfileDetailImageWrapper from "./ProfileDetailImageWrapper";

export default ({ name, picture, email, phone, dob }) => (
  <ProfileDetailWrapper>
    <div className="row">
      <div className="col-12">
        <ProfileDetailImageWrapper src={picture.large} alt={email} />
      </div>
    </div>
    <div className="row mb-2">
      <div className="col-12">
        <h4>
          {name.first} {name.last}
        </h4>
      </div>
    </div>
    <div className="row mb-2">
      <div className="col-12">
        <i className="far fa-envelope fa-2x"></i>
        <span className="ml-2">{email}</span>
      </div>
    </div>
    <div className="row mb-2">
      <div className="col-12">
        <i className="fas fa-birthday-cake fa-2x"></i>
        <span className="ml-2">{dob.date}</span>
      </div>
    </div>
    <div className="row mb-2">
      <div className="col-12">
        <i className="fas fa-mobile-alt fa-2x"></i>
        <span className="ml-2">{phone}</span>
      </div>
    </div>
  </ProfileDetailWrapper>
);
