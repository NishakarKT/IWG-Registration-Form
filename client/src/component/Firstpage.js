import React from "react";
import "./Firstpage.css";
export default function Firstpage() {
  function shouldBlur(e) {
    e.target.blur();
  }
  function shouldFocus(e) {
    e.target.focus();
  }
  return (
    <>
      <div className="IwgFormContainer">
        <div className="headingFresherSelection">
          <h3>Fresher Selection</h3>
        </div>
        <div className="IWGLogoContainer">
          <img
            src={process.env.PUBLIC_URL + "/image/IWGLogo.png "}
            alt="IWG LOGO"
          />
        </div>

        <div className="WhatName">
          <h5>What is your name ?</h5>
          <i className="far fa-comment-dots logoOfName"></i>
          <input
            type="text"
            autocomplete="off"
            placeholder="Type your Name"
            // onChange={setinputusername}
            onMouseOut={shouldBlur}
            onMouseOver={shouldFocus}
          />
        </div>
        <div className="WhatRollNumber">
          <h5>What is your Roll Number ?</h5>
          <i className="far fa-comment-dots logoOfRoll"></i>
          <input
            type="text"
            autocomplete="off"
            placeholder="Type your Institute roll"
            // onChange={setinputusername}
            onMouseOut={shouldBlur}
            onMouseOver={shouldFocus}
          />
        </div>
        <div className="FirstpageNextbutton">
          <div id="nextbutton">Next</div>
        </div>
      </div>
    </>
  );
}
