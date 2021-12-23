import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
export default function Fifthpage() {
  const history = useHistory();
  const location = useLocation();
  const NameofStudent = location.state.StudentName;
  const RollNoofStudent = location.state.RollNoofStudent;
  const Firstname = location.state.FirstNameofStudentt;
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
  const [YourIntrestedPart, setYourIntrestedPart] = useState();
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
    //   if(clicka===true && clickb===true && clickc===true && clickd===true){
    //     setYourIntrestedPart("Core Team, Design Team, Web Team and Content Team")
    //   }
    //  else if(clicka===true && clickb===true && clickc===true && clickd!==true){
    //     setYourIntrestedPart("Core Team, Design Team and Web Team")
    //   }
    //   else if(clicka===true && clickb===true && clickc!==true && clickd===true){
    //     setYourIntrestedPart("Core Team, Designe Team and Content Team")
    //   }
    //   else if(clicka===true && clickb!==true && clickc===true && clickd===true){
    //     setYourIntrestedPart("Core Team, Web Team and Content Team")
    //   }
    //   else if(clicka!==true && clickb===true && clickc===true && clickd===true){
    //     setYourIntrestedPart("Design Team, Web Team and Content Team")
    //   }
    //   else  if(clicka===true && clickb===true && clickc!==true && clickd!==true){
    //     setYourIntrestedPart("Core Team and Design Team")
    //   }
    //   else  if(clicka===true && clickb!==true && clickc===true && clickd!==true){
    //     setYourIntrestedPart("Core Team and Design Team")
    //   }
    //   else  if(clicka!==true && clickb===true && clickc===true && clickd!==true){
    //     setYourIntrestedPart("Core Team and Design Team")
    //   }
    //   else  if(clicka===true && clickb!==true && clickc!==true && clickd===true){
    //     setYourIntrestedPart("Core Team and Design Team")
    //   }
    //   else  if(clicka!==true && clickb===true && clickc!==true && clickd===true){
    //     setYourIntrestedPart("Core Team and Design Team")
    //   } else  if(clicka!==true && clickb!==true && clickc===true && clickd===true){
    //     setYourIntrestedPart("Core Team and Design Team")
    //   }
  }
  return (
    <div>
      {" "}
      {/* <div>
        {NameofStudent}, {RollNoofStudent},{Firstname},{InstituteEmail},
        {PersonalEmail}{" "}
      </div> */}
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
        <div>
          {" "}
          <h5>Choose your intrested part</h5>
        </div>
        <div>
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
          <div id="VerifyOTPbutton" onClick={IntresredField}>
            Intrested
          </div>
        </div>
      </div>
    </div>
  );
}
