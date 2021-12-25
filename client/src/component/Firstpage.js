import React, { useState } from "react";
import "./Firstpage.css";
import { useHistory } from "react-router-dom";
export default function Firstpage() {
  const [NameOfStudent, setNameOfStudent] = useState(" ");
  const [RollNoOfStudent, setRollNoOfStudent] = useState(" ");
  const history = useHistory();
  const [isActiveNameBlank, setisActiveNameBlank] = useState(false);
  const [isActiveRollBlank, setisActiveRollBlank] = useState(false);
  function shouldBlur(e) {
    e.target.blur();
  }
  function shouldFocus(e) {
    e.target.focus();
  }
  function handlestorename(e) {
    setNameOfStudent(e.target.value);
    setisActiveNameBlank(false);
  }
  function handlestorrollnumber(e) {
    setRollNoOfStudent(e.target.value);
    setisActiveRollBlank(false);
  }
  function GoToSecondPage() {
    if (NameOfStudent === " " && RollNoOfStudent === " ") {
      setisActiveNameBlank(true);
      setisActiveRollBlank(true);
    } else if (NameOfStudent === " ") {
      setisActiveNameBlank(true);
    } else if (RollNoOfStudent === " ") {
      setisActiveRollBlank(true);
    } else if (NameOfStudent.length === 0) {
      setisActiveNameBlank(true);
    } else if (RollNoOfStudent.length === 0) {
      setisActiveRollBlank(true);
    } else {
      let text = `${NameOfStudent}`;
      let index = text.indexOf(" ");
      index = text.indexOf(" ");
      let result;
      console.log(index);
      if (index !== -1) {
        result = text.substring(0, index);
      } else {
        result = `${NameOfStudent}`;
      }

      history.push("/Confirmationoffirstpage", {
        RollNoofStudent: `${RollNoOfStudent}`,
        StudentName: `${NameOfStudent}`,
        FirstNameofStudent: `${result}`,
      });
    }
  }

  return (
    <>
      <div className="IwgFormContainer">
        <div className="headingFresherSelection">
          <h3>Fresher's Selection</h3>
        </div>
        <div className="IWGLogoContainer">
          <img
            src={process.env.PUBLIC_URL + "/image/IWGLogo.png"}
            alt="IWG LOGO"
          />
        </div>

        <div className="WhatName">
          <h5>What is your name ?</h5>
          <i className="far fa-comment-dots logoOfName"></i>
          <input
            type="text"
            id="delete"
            autocomplete="off"
            placeholder="Tony Stark"
            onChange={handlestorename}
            onMouseOut={shouldBlur}
            onMouseOver={shouldFocus}
            style={
              isActiveNameBlank === true
                ? { border: "1px solid red" }
                : { border: "1px dashed rgb(5 83 107)" }
            }
          />
          <div className="BlankerrorForName">
            <div
              className="required"
              style={
                isActiveNameBlank === true ? { opacity: "1" } : { opacity: "0" }
              }
            >
              *required
            </div>
          </div>
        </div>
        <div className="WhatRollNumber">
          <h5>What is your Roll Number ?</h5>
          <i className="far fa-comment-dots logoOfRoll"></i>
          <input
            type="text"
            autocomplete="off"
            placeholder="21CS12345"
            onChange={handlestorrollnumber}
            onMouseOut={shouldBlur}
            onMouseOver={shouldFocus}
            style={
              isActiveRollBlank === true
                ? { border: "1px solid red" }
                : { border: "1px dashed rgb(5 83 107)" }
            }
          />
          <div className="BlankerrorForRoll">
            <div
              className="required"
              style={
                isActiveRollBlank === true ? { opacity: "1" } : { opacity: "0" }
              }
            >
              *required
            </div>
          </div>
        </div>

        <div className="FirstpageNextbutton">
          <div id="nextbutton" onClick={GoToSecondPage}>
            Next
          </div>
        </div>
      </div>
    </>
  );
}
