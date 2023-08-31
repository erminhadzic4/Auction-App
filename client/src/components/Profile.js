import React from "react";
import "../styles/MyAccount.css";

const Profile = () => {
  return (
    <>
      <div className="top-border">Personal information</div>
      <div className="personal-info-form">
        <div className="info-left">
          <img src="/profile.png" alt="Profile" className="profile-image" />
          <label>Change picture</label>
        </div>
        <div className="info-right">
          <div className="input-group">
            <label htmlFor="firstName" className="label-typography">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstname"
              className="input-field"
              placeholder="John"
              autoComplete="off"
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName" className="label-typography">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastname"
              className="input-field"
              placeholder="Doe"
              autoComplete="off"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="label-typography">
              Enter Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              placeholder="email@email.com"
              autoComplete="off"
            />
          </div>
          <label htmlFor="dd" className="label-typography">
            Date of Birth
          </label>
          <div className="date-of-birth ">
            <div className="input-group">
              <input
                type="text"
                id="mm"
                name="mm"
                className="input-field"
                placeholder="DD"
                autoComplete="off"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                id="mm"
                name="mm"
                className="input-field"
                placeholder="MM"
                autoComplete="off"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                id="yy"
                name="yy"
                className="input-field"
                placeholder="YY"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="item" className="label-typography">
              Phone Number
            </label>
            <div className="number-input-divs">
              <input
                type="text"
                id="phone-div"
                name="phone"
                className="input-field"
                placeholder="+3812312371"
                autoComplete="off"
                required
              />
              <div className="number-text">Not verified</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
