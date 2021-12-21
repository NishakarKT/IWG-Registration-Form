import React from "react";
import "./Confirmationoffirstpage.css";
import { useLocation, useHistory } from "react-router-dom";
export default function Confirmationoffirstpage() {
  const history = useHistory();
  const location = useLocation();
  const NameofStudent = location.state.StudentName;
  const RollNoofStudent = location.state.RollNoofStudent;
  const Firstname = location.state.FirstNameofStudent;
  function handleSendBackToFrstPage() {
    history.push("/");
  }
  return (
    <>
      <div className="ConfrmationPageContainer">
        <div
          className="BacrToFirstPageArrow"
          title="Click here to go back"
          onClick={handleSendBackToFrstPage}
        >
          <span className="previousArrow"> &larr;</span>
          <i class="fas fa-backward"></i>
        </div>

        <div className="headingFresherSelection">
          <h3>Fresher's Selection</h3>
        </div>
        <div className="IWGLogoContainer">
          <img
            src={process.env.PUBLIC_URL + "/image/IWGLogo.png "}
            alt="IWG LOGO"
          />
        </div>

        <div className="Confirmationoffirstpage">
          <div id="confirmaionmsgContainer">
            <h5 className="msgToStudent">
              {" "}
              Dear {Firstname}, Please confirm your name and roll number
            </h5>
            <h5 className="msgForGoBack">
              If something appear to be incorrect, go back and correct it
            </h5>
          </div>
          <div>
            <div className="ErpRegisteredName">
              Name as registered on ERP:{" "}
              <span className="changeColorOFNameandRoll">{NameofStudent}</span>
            </div>
            <div className="InsTRollNo">
              Institute Roll Number:{" "}
              <span className="changeColorOFNameandRoll">
                {RollNoofStudent}
              </span>
            </div>
          </div>
        </div>
        <div className="ConfirmButtonbutton">
          <div id="Confirmbutton">Confirm</div>
        </div>
      </div>
    </>
  );
}
