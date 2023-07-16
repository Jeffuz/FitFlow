import React from "react";
import SignupComponent from "../Components/UserAuthentication/SignupComponent";
import { useLocation } from "react-router-dom";

export default function Signup() {
  const {state} = useLocation();
  const {workoutString} = state;
  console.log("SIGNUP", workoutString);

  return(
    <div className="h-screen bg-cover bg-center bg-gray-200 flex justify-center">
      <div className="mt-36">
        <SignupComponent workoutString={workoutString}/>
      </div>
      
    </div>
  )
}