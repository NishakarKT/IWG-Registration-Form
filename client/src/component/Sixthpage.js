import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./Sixthpage.css";
export default function Sixthpage() {
  const history = useHistory();
  const location = useLocation();
  const NameofStudent = location.state.StudentName;
  const RollNoofStudent = location.state.RollNoofStudent;
  const Firstname = location.state.FirstNameofStudent;
  const InstituteEmail = location.state.Instemail;
  const PersonalEmail = location.state.Personalmail;
  const YourIntrestedPart = location.state.IntrestedField;
  const [Answera, setAnswera] = useState("He was not filled this answer");
  const [Answerb, setAnswerb] = useState("He was not filled this answer");
  function shouldBlur(e) {
    e.target.blur();
    if (Answera === "") {
      setAnswera("He was not filled this answer");
    }
    if (Answerb === "") {
      setAnswerb("He was not filled this answer");
    }
  }
  function shouldFocus(e) {
    e.target.focus();
  }
  function handlesetAnswera(e) {
    setAnswera(e.target.value);
  }
  function handlesetAnswerb(e) {
    setAnswerb(e.target.value);
  }
  function submitFinalAnswer() {
    history.push("/Lastpage", {
      RollNoofStudent: `${RollNoofStudent}`,
      StudentName: `${NameofStudent}`,
      FirstNameofStudent: `${Firstname}`,
      Instemail: `${InstituteEmail}`,
      Personalmail: `${PersonalEmail}`,
      IntrestedField: `${YourIntrestedPart}`,
      Answera: `${Answera}`,
      Answerb: `${Answerb}`,
    });
  }

  return (
    <>
      {/* it is six
      <diV>
        {" "}
        {NameofStudent}, {RollNoofStudent},{Firstname},{InstituteEmail},
        {PersonalEmail},{YourIntrestedPart}
      </diV> */}
      <div className="ThirdPageContainer">
        <div className="headingFresherSelection">
          <h3>Fresher's Selection</h3>
        </div>
        <div className="IWGLogoContainer">
          <img
            src={process.env.PUBLIC_URL + "/image/IWGLogo.png"}
            alt="IWG LOGO"
          />
        </div>

        <div className="intrestedTeamNames gggh">
          {" "}
          <h5 id="marginTOP">Why do you want to be a part of IWG ?</h5>
          <textarea
            type="text"
            id="delete"
            autocomplete="off"
            cols="29"
            rows="3"
            placeholder="Your answer will be appreciated"
            onChange={handlesetAnswera}
            onMouseOut={shouldBlur}
            onMouseOver={shouldFocus}
          />
        </div>
        <div className="intrestedTeamNames gggh">
          {" "}
          <h5>
            Why do you think we should choose you to be a member of the IWG ?
          </h5>
          <textarea
            type="text"
            id="delete"
            autocomplete="off"
            cols="29"
            rows="3"
            placeholder="Your answer will be appreciated"
            onChange={handlesetAnswerb}
            onMouseOut={shouldBlur}
            onMouseOver={shouldFocus}
          />
        </div>
        <div className="VerifyButtonbutton">
          <div id="nextbutton" onClick={submitFinalAnswer}>
            Submit
          </div>
        </div>
      </div>
    </>
  );
}
