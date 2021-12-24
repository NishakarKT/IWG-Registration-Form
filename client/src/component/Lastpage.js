import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import $ from "jquery"
export default function Lastpage() {
  const history = useHistory();
  const location = useLocation();
  const NameofStudent = location.state.StudentName;
  const RollNoofStudent = location.state.RollNoofStudent;
  const Firstname = location.state.FirstNameofStudent;
  const InstituteEmail = location.state.Instemail;
  const PersonalEmail = location.state.Personalmail;
  const YourIntrestedPart = location.state.IntrestedField;
  const Answera = location.state.Answera;
  const Answerb = location.state.Answerb;
  function call() {
    history.push("/Firstpage");
  }
  setTimeout(call, 12000);

  useEffect(() => {
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwD-qPU8kK60_6M42tRf7LzK2674VXjZSp8ZsmOAE3dzGVY-13PPRwWf1Rv7X6X4SgG/exec",
        type: "post",
        data: $("#finalForm").serialize(),
        success: res => {
          // success
        }
    });
  }, []);

  const formToSheet = e => {
    // e.preventDefault();
    // console.log("eg5g");
    // console.log(e.target.serialize());
    // $.ajax({
    //     url: "https://script.google.com/macros/s/AKfycbwD-qPU8kK60_6M42tRf7LzK2674VXjZSp8ZsmOAE3dzGVY-13PPRwWf1Rv7X6X4SgG/exec",
    //     type: "post",
    //     data: e.target.serialize(),
    //     success: res => {
    //         console.log(res);
    //         window.location.reload();
    //     }
    // });
  };

  return (
    <>
      {/* <div>
        {NameofStudent}, {RollNoofStudent},{Firstname},{InstituteEmail},
        {PersonalEmail},{YourIntrestedPart},{Answera},{Answerb}
      </div> */}
      <div className="confirmationemailpageContainer">
        {/* <div className="headingFresherSelection">
          <h3>Fresher's Selection</h3>
        </div>
        <div className="IWGLogoContainer">
          <img
            src={process.env.PUBLIC_URL + "/image/IWGLogo.png "}
            alt="IWG LOGO"
          />
        </div> */}
        <div className="intrestedTeamNames gggh">
          {" "}
          <h5 id="marginTOP">
            Dear {Firstname},we have received your message and would like to
            thank you for showing your intrest in IWG.We'll analyze your
            information and come back to you within a 5 working days.
          </h5>
        </div>
        <div className="intrestedTeamNames gggh lastpageIWGTEAM">
          {" "}
          <h5 id="marginTOP">...IWG Team</h5>
        </div>
        {/* <div>
          <div className="lastpageIWGTEAM">
            <div className="Okaybutton" onClick={ClickOkayButton}>
              Okay
            </div>
          </div>
        </div> */}
      </div>
      <form id="finalForm" style={{ display: "none" }}>
        <input name="Name" value={NameofStudent} />
        <input name="Roll" value={RollNoofStudent} />
        <input name="Institute Email" value={InstituteEmail} />
        <input name="Personal Email" value={PersonalEmail} />
        <input name="Interest" value={YourIntrestedPart} />
        <input name="Why Us?" value={Answera} />
        <input name="Why You?" value={Answerb} />
      </form>
    </>
  );
}
