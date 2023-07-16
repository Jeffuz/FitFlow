import React from "react";
import SignupComponent from "../Components/UserAuthentication/SignupComponent";
import { useLocation } from "react-router-dom";

export default function Signup() {
  const {state} = useLocation();
  const {workoutString} = state;
  console.log("SIGNUP", workoutString);

  return(
    <div>
      <SignupComponent workoutString={workoutString}/>
    </div>
  )
}