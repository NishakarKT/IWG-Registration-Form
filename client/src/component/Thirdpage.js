import React, { useState } from "react";
import "./Thirdpage.css";
import { useLocation, useHistory } from "react-router-dom";
export default function Thirdpage() {
  const history = useHistory();
  const location = useLocation();
  const NameofStudent = location.state.StudentName;
  const RollNoofStudent = location.state.RollNoofStudent;
  const Firstname = location.state.FirstNameofStudent;
  const [opacityOfdropdown, setopacityOfdropdown] = useState(0);
  const [instituteEmail, setinstituteEmail] = useState(" ");
  const [personalEmail, setpersonalEmail] = useState(" ");
  const [isActiveInstEmailBlank, setisActiveInstEmailBlank] = useState(false);
  const [isActivePersonalEmailBlank, setisActivepersonalEmailBlank] =
    useState(false);

  const getInitialStateOfdropdown = () => {
    const valueOfdropdown = "@kgpian.iitkgp.ac.in";
    return valueOfdropdown;
  };

  const [valueOfdropdown, setvalueOfdropdown] = useState(
    getInitialStateOfdropdown
  );

  const handleChangeOFDropdown = (e) => {
    setvalueOfdropdown(e.target.value);
  };
  function shouldBlur(e) {
    e.target.blur();
  }
  function shouldFocus(e) {
    e.target.focus();
  }
  function handleonChangeInstituteEmail(e) {
    setinstituteEmail(e.target.value);
    setisActiveInstEmailBlank(false);
    // setIsActive(false);

    if (e.target.value === "") {
      setopacityOfdropdown(0);
      setvalueOfdropdown("@kgpian.iitkgp.ac.in");
    } else setopacityOfdropdown(1);
  }

  function handleonChangePersonalEmail(e) {
    setpersonalEmail(e.target.value);
    setisActivepersonalEmailBlank(false);
  }
  function GETOTP() {
    if (instituteEmail === " " && personalEmail === " ") {
      setisActiveInstEmailBlank(true);
      setisActivepersonalEmailBlank(true);
    } else if (instituteEmail === " ") {
      setisActiveInstEmailBlank(true);
    } else if (personalEmail === " ") {
      setisActivepersonalEmailBlank(true);
    } else if (instituteEmail.length === 0) {
      setisActiveInstEmailBlank(true);
    } else if (personalEmail.length === 0) {
      setisActivepersonalEmailBlank(true);
    } else {
      history.push("/Confirminstemail", {
        RollNoofStudent: `${RollNoofStudent}`,
        StudentName: `${NameofStudent}`,
        FirstNameofStudent: `${Firstname}`,
        Instemail: `${instituteEmail}${valueOfdropdown}`,
        Personalmail: `${personalEmail}`,
      });
    }
  }
  return (
    <>
      <div className="ThirdPageContainer">
        <div className="headingFresherSelection">
          <h3>Fresher's Selection</h3>
        </div>
        <div className="IWGLogoContainer">
          <img
            src={process.env.PUBLIC_URL + "/image/IWGLogo.png "}
            alt="IWG LOGO"
          />
        </div>

        <div className="WhatInstituteEmail">
          <h5>What is your Institute Email?</h5>
          <i className="far fa-envelope logoOfInstEmail"></i>
          <input
            type="text"
            id="delete"
            autocomplete="off"
            placeholder="aryanroy.tony"
            onChange={handleonChangeInstituteEmail}
            onMouseOut={shouldBlur}
            onMouseOver={shouldFocus}
            style={
              isActiveInstEmailBlank === true
                ? { border: "1px solid red" }
                : { border: "1px dashed rgb(5 83 107)" }
            }
          />
          <div className="BlankerrorForName">
            <div
              className="required"
              style={
                isActiveInstEmailBlank === true
                  ? { opacity: "1" }
                  : { opacity: "0" }
              }
            >
              *required
            </div>
          </div>
          <select
            id="suffuxemailOfStudent"
            value={valueOfdropdown}
            onChange={handleChangeOFDropdown}
            onMouseOut={shouldBlur}
            onMouseOver={shouldFocus}
            style={
              `${opacityOfdropdown}` === "1"
                ? { opacity: "1" }
                : {
                    opacity: "0",
                    width: "0",
                    height: "0",
                    top: "-10000000000000000000000px",
                  }
            }
          >
            <option value="@kgpian.iitkgp.ac.in">@kgpian.iitkgp.ac.in</option>
            <option value="@iitkgp.ac.in">@iitkgp.ac.in</option>
            <option value="@iitkg.ac.in">@iitkg.ac.in</option>
          </select>
        </div>
        <div className="WhatPersonalEmail">
          <h5>What is your personal email ?</h5>
          <i className="far fa-envelope logoOfpersonalEmail"></i>

          <input
            type="text"
            autocomplete="off"
            placeholder="aryanroy.tony@gmail.com"
            onChange={handleonChangePersonalEmail}
            onMouseOut={shouldBlur}
            onMouseOver={shouldFocus}
            style={
              isActivePersonalEmailBlank === true
                ? { border: "1px solid red" }
                : { border: "1px dashed rgb(5 83 107)" }
            }
          />
          <div className="BlankerrorForRoll">
            <div
              className="required"
              style={
                isActivePersonalEmailBlank === true
                  ? { opacity: "1" }
                  : { opacity: "0" }
              }
            >
              *required
            </div>
          </div>
        </div>

        <div className="FirstpageNextbutton">
          <div id="nextbutton" onClick={GETOTP}>
            Get OTP
          </div>
        </div>
      </div>
    </>
  );
}
