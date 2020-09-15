import React from "react";
import ProfileDetailWrapper from "./ProfileDetailWrapper";
import ProfileDetailImageWrapper from "./ProfileDetailImageWrapper";
import moment from "moment";

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
        <img src="/static/icons/email.svg" className="icon"></img>
        <span className="ml-2">{email}</span>
      </div>
    </div>
    <div className="row mb-2">
      <div className="col-12">
        <img src="/static/icons/dob.svg" className="icon"></img>
        <span className="ml-2">{moment(dob.date).format("D/M/YYYY")}</span>
      </div>
    </div>
    <div className="row mb-2">
      <div className="col-12">
        <img src="/static/icons/phone.svg" className="icon"></img>
        <span className="ml-2">{phone}</span>
      </div>
    </div>
  </ProfileDetailWrapper>
);
