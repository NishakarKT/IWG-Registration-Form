import React, { useState } from "react";
import "./Fifthpage.css";
import { useLocation, useHistory } from "react-router-dom";
export default function Fifthpage() {
  const history = useHistory();
  const location = useLocation();
  const NameofStudent = location.state.StudentName;
  const RollNoofStudent = location.state.RollNoofStudent;
  const Firstname = location.state.FirstNameofStudent;
  const InstituteEmail = location.state.Instemail;
  const PersonalEmail = location.state.Personalmail;
  const [Teama, setTeama] = useState("");
  const [Teamb, setTeamb] = useState("");
  const [Teamc, setTeamc] = useState("");
  const [Teamd, setTeamd] = useState("");
  const [clicka, setclicka] = useState(false);
  const [clickb, setclickb] = useState(false);
  const [clickc, setclickc] = useState(false);
  const [clickd, setclickd] = useState(false);
  const [OpacityerrorIntrest, setOpacityerrorIntrest] = useState(false);
  // const [YourIntrestedPart, setYourIntrestedPart] = useState("bbb");
  let YourIntrestedPart = "";
  function Team1(e) {
    setTeama(e.target.value);
    setclicka(!clicka);
  }
  function Team2(e) {
    setTeamb(e.target.value);
    setclickb(!clickb);
  }
  function Team3(e) {
    setTeamc(e.target.value);
    setclickc(!clickc);
  }
  function Team4(e) {
    setTeamd(e.target.value);
    setclickd(!clickd);
  }
  function IntresredField() {
    if (clicka === true) {
      YourIntrestedPart = YourIntrestedPart.concat(`'Core Team'`, " ");
      setOpacityerrorIntrest(false);
    }
    if (clickb === true) {
      YourIntrestedPart = YourIntrestedPart.concat(`'Design Team'`, " ");
      setOpacityerrorIntrest(false);
    }
    if (clickc === true) {
      YourIntrestedPart = YourIntrestedPart.concat(`'Web Team'`, " ");
      setOpacityerrorIntrest(false);
    }
    if (clickd === true) {
      YourIntrestedPart = YourIntrestedPart.concat(`'Content Team'`, " ");
      setOpacityerrorIntrest(false);
    }
    if (
      clicka === true ||
      clickb === true ||
      clickc === true ||
      clickd === true
    ) {
      history.push("/Sixthpage", {
        RollNoofStudent: `${RollNoofStudent}`,
        StudentName: `${NameofStudent}`,
        FirstNameofStudent: `${Firstname}`,
        Instemail: `${InstituteEmail}`,
        Personalmail: `${PersonalEmail}`,
        IntrestedField: `${YourIntrestedPart}`,
      });
    } else {
      setOpacityerrorIntrest(true);
    }
  }
  return (
    <div>
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
        <div className="intrestedTeamNames">
          {" "}
          <h5>Choose your intrested part</h5>
        </div>
        <div className="intrestedTeamNamesinput">
          <input
            type="checkbox"
            id="Team1"
            name="vehicle1"
            value="Core"
            onClick={Team1}
          />
          <label for="Team1">Core-Team</label>
          <br />
          <input
            type="checkbox"
            id="Team2"
            name="vehicle2"
            value="Design"
            onClick={Team2}
          />
          <label for="Team2">Design-Team</label>
          <br />
          <input
            type="checkbox"
            id="Team3"
            name="vehicle3"
            value="Web"
            onClick={Team3}
          />
          <label for="Team3">Web-Team</label>
          <br />
          <input
            type="checkbox"
            id="Team4"
            name="vehicle3"
            value="Content"
            onClick={Team4}
          />
          <label for="Team4">Content-Team</label>
        </div>
        <div className="VerifyButtonbutton">
          <div id="nextbutton" onClick={IntresredField}>
            Intrested
          </div>
        </div>
        <div
          className="UnselectedIntrestNotification"
          style={
            OpacityerrorIntrest === true ? { opacity: "1" } : { opacity: "0" }
          }
        >
          Please select your intrest!
        </div>
      </div>
    </div>
  );
}
