import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  function storeToken(token) {
    localStorage.setItem('token', token);
  }
  async function loginUser(credentials) {
    console.log("Passing in data");

    return fetch(`http://127.0.0.1:5000/login?`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
  }

  const handleLogin = async (event) => {
    event.preventDefault();

    let result = await loginUser({ email, password });
    let convert = await result.json();
    console.log(convert);

    let returnResult = convert["Result"];

    if (returnResult !== "Success") {
      console.log(convert["Error"]);
      return;
      // Retry
    }
    storeToken(convert["Id"]);
    navigate('/displayWorkout');
    //Fetch database
  };

  return (
    <div>
      <p>Login Component</p>
      <form onSubmit={handleLogin}>
        <label>Email: </label> <br />

        <input type="text" onChange={e => setEmail(e.target.value)} /> <br />

        <label>Password: </label> <br />

        <input type="password" onChange={e => setPassword(e.target.value)} /> <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}