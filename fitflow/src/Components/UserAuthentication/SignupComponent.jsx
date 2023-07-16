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
  console.log(workoutPrompt);
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
      <img className="object-scale-down mb-4 h-32"
      src="https://static-00.iconduck.com/assets.00/team-success-illustration-512x393-socu1yrp.png" />
      <p className="text-2xl mb-6">Join us to get access to your health report!</p>
      <form onSubmit={handleSignup}>
        <label>First Name: </label> <br />

        <input className='p-4 mb-3 mt-2 rounded-lg h-7 w-64 text-gray-700
        focus:outline-none focus:ring focus:ring-blue-300' type="text" onChange={e => setName(e.target.value)} /> <br />
        <label>Email: </label> <br />

        <input className='p-4 mb-3 mt-2 rounded-lg h-7 w-64 text-gray-700
        focus:outline-none focus:ring focus:ring-blue-300'type="text" onChange={e => setEmail(e.target.value)} /> <br />

        <label>Password: </label> <br />

        <input className='p-4 mb-3 mt-2 rounded-lg h-7 w-64 text-gray-700
        focus:outline-none focus:ring focus:ring-blue-300'type="password" onChange={e => setPassword(e.target.value)} /> <br />

        <label>Confirm Password: </label> <br />

        <input className='p-4 mb-3 mt-2 rounded-lg h-7 w-64 text-gray-700
        focus:outline-none focus:ring focus:ring-blue-300'type="password" onChange={checkMatchingPassword} /> <br />

        <button className="transition delay-1000 duration-1000
        hover:text-gray-800 hover:text-lg text-gray-700 
        font-bold py-2 px-1"type="submit">Signup</button>
      </form>
    </div>
  );
}