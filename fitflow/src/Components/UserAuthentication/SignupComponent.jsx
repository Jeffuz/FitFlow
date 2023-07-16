import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PASSWORDLENGTH = '8';
const NUMBEROFCAPITALLETTERS = '1';

export default function SignupComponent(workoutString) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);

  const [isMatchingPassword, setIsMatchingPassword] = useState(false);

  const workoutPrompt = workoutString.workoutString;
  const navigate = useNavigate();


  function storeToken(token) {
    localStorage.setItem('token', token);
  }

  const checkMatchingPassword = (event) => {

    let inputPassword = event.target.value;

    if (password !== inputPassword) {
      setIsMatchingPassword(false);
      return;
    }

    setIsMatchingPassword(true);
  }

  async function signupUser(credentials) {

    return fetch(`http://127.0.0.1:5000/signup?`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    })

  }
  const handleSignup = async (event) => {
    event.preventDefault();

    const emailCheck = /[\w]+@[A-Za-z]+\.(.){3,}/g
    const passLengthCheck = /(.+){6,}/g
    const passSpecialCharacterCheck = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]+/g
    const passUpperCaseCheck = /[A-Z]+/g

    let isValidEmail = emailCheck.test(email);
    let isPLength = passLengthCheck.test(password);
    let isPSpecial = passSpecialCharacterCheck.test(password);
    let isPUpper = passUpperCaseCheck.test(password);

    if (!isValidEmail) {
      //setErrorMessage("Email is Invalid");
      console.log("Email Invalid");
      return;
    }

    if (!isPLength || !isPSpecial || !isPUpper || !isMatchingPassword)
      return;



    let result = await signupUser({ email, password, workoutPrompt, name });
    let convert = await result.json();

    let returnResult = convert["Result"];

    if (returnResult !== "Success") {
      console.log(convert["Error"]);
      return;
      // Retry
    }

    storeToken(convert["Id"]);
    console.log(convert);
    navigate('/displayWorkout');
    // Fetch database
  };

  return (
    <div>
      <p>Signup Component</p>
      <form onSubmit={handleSignup}>
        <label>First Name: </label> <br />

        <input type="text" onChange={e => setName(e.target.value)} /> <br />
        <label>Email: </label> <br />

        <input type="text" onChange={e => setEmail(e.target.value)} /> <br />

        <label>Password: </label> <br />

        <input type="password" onChange={e => setPassword(e.target.value)} /> <br />

        <label>Confirm Password: </label> <br />

        <input type="password" onChange={checkMatchingPassword} /> <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}