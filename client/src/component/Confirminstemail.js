import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from 'axios';
import "./Confirminstemail.css";
export default function Confirminstemail() {
  const location = useLocation();
  const history = useHistory();
  const NameofStudent = location.state.StudentName;
  const RollNoofStudent = location.state.RollNoofStudent;
  const Firstname = location.state.FirstNameofStudent;
  const InstituteEmail = location.state.Instemail;
  const PersonalEmail = location.state.Personalmail;
  const [UserOTP, setUserOTP] = useState(" ");
  const [isActiveOTP, setisActiveOTP] = useState(false);
  function handleonClickOTPVerify() {
    if (UserOTP === " ") {
      setisActiveOTP(true);
    } else if (UserOTP.length === 0) {
      setisActiveOTP(true);
    } else {
      try {
        axios.post("http://localhost:8000/otp/verify", { email: InstituteEmail, otp: UserOTP })
          .then(res => {
            history.push("/Fifthpage", {
              RollNoofStudent: `${RollNoofStudent}`,
              StudentName: `${NameofStudent}`,
              FirstNameofStudent: `${Firstname}`,
              Instemail: `${InstituteEmail}`,
              Personalmail: `${PersonalEmail}`,
            });
          })
          .catch(err => {
            // handle error
          })
      } catch (err) {
        // handle error
      }
    }
    console.log(isActiveOTP);
  }
  function shouldBlur(e) {
    e.target.blur();
  }
  function shouldFocus(e) {
    e.target.focus();
  }

  function handleonChangeclickVerify(e) {
    setUserOTP(e.target.value);
    setisActiveOTP(false);
  }
  return (
    <>
      <div className="confirmationemailpageContainer">
        <div className="headingFresherSelection">
          <h3>Fresher's Selection</h3>
        </div>
        <div className="IWGLogoContainer">
          <img
            src={process.env.PUBLIC_URL + "/image/IWGLogo.png "}
            alt="IWG LOGO"
          />
        </div>

        <div id="EmailVerificationmsg">
          <h5 className="msgToStudent">
            Dear {Firstname}, we've just sent a verification code on the email:{" "}
            <span id="nameofinstituteemailidinVerificationPage">
              {" "}
              {InstituteEmail}
            </span>
          </h5>
        </div>
        {/* <div>
          {NameofStudent}, {RollNoofStudent},{Firstname},{InstituteEmail},
          {PersonalEmail}{" "}
        </div> */}
        <div className="WhatIsYourOtp">
          <h5>What OTP did you get ?</h5>
          <i className="fas fa-lock OTPlocklogo"></i>

          <input
            type="text"
            autocomplete="off"
            placeholder="xxxxxx"
            onChange={handleonChangeclickVerify}
            onMouseOut={shouldBlur}
            onMouseOver={shouldFocus}
            style={
              isActiveOTP === true
                ? { border: "1px solid red" }
                : { border: "1px dashed rgb(5 83 107)" }
            }
          />
          <div className="BlankerrorForRoll">
            <div
              className="required"
              style={isActiveOTP === true ? { opacity: "1" } : { opacity: "0" }}
            >
              *required
            </div>
          </div>
          <div className="VerifyButtonbutton">
            <div id="VerifyOTPbutton" onClick={handleonClickOTPVerify}>
              Verify
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
