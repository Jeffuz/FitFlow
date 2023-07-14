import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() { 

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  async function loginUser(email, pass) {
    console.log("Passing in data");

    return fetch(`http://127.0.0.1:5000/login?`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'email': email,
        'password': pass,
      })
    });
  }

  const handleLogin = async(event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    let result = await loginUser(email, password);
    let convert = await result.json();
    console.log(convert);

    let returnResult = convert["validLogin"];

    if(returnResult !== true)
    {
      // Retry
    }

    navigate(-1);
    //Fetch database
  };

  return (
    <div>
      <p>Login Component</p>
      <form onSubmit={handleLogin}>
        <label>Email: </label> <br/>

        <input type="text" onChange={e => setEmail(e.target.value)} /> <br/>

        <label>Password: </label> <br/>

        <input type="password" onChange={e => setPassword(e.target.value)}/> <br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}