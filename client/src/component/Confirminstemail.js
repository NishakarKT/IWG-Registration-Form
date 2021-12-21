import React from "react";
import { useLocation } from "react-router-dom";

export default function Confirminstemail() {
  const location = useLocation();
  const NameofStudent = location.state.StudentName;
  const RollNoofStudent = location.state.RollNoofStudent;
  const Firstname = location.state.FirstNameofStudent;
  const InstituteEmail = location.state.Instemail;
  const PersonalEmail = location.state.Personalmail;
  return (
    <div>
      {NameofStudent}, {RollNoofStudent},{Firstname},{InstituteEmail},
      {PersonalEmail}{" "}
    </div>
  );
}
