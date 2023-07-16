import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

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
      console.log("Incorrect data");
      return
      // Retry
    }

    navigate(-1);
    //Fetch database
  };

  return (
    <div>
      <img className="object-scale-down mb-4 h-24"
      src="https://static-00.iconduck.com/assets.00/user-profile-illustration-512x166-tpnxxvhp.png" />
      <p className="text-2xl mb-6">Welcome!</p>
      <form onSubmit={handleLogin}>
        <label>Email: </label> <br />

        <input 
          className='p-4 mb-3 mt-2 rounded-lg h-7 w-64 text-gray-700
          focus:outline-none focus:ring focus:ring-blue-300' 
          type="text" 
          onChange={e => setEmail(e.target.value)} 
        /> <br />

        <label>Password: </label> <br />

        <input 
          className='p-4 mb-6 mt-2 rounded-lg h-7 w-64 text-gray-700 sm:text-md
          focus:outline-none focus:ring focus:ring-blue-300' 
          type="password" onChange={e => setPassword(e.target.value)} 
        /> <br />

        <button 
          className="transition delay-1000 duration-1000
          hover:text-gray-800 hover:text-lg text-gray-700 
          font-bold py-2 px-1"
          type="submit">
            Login
        </button>
      </form>
    </div>
  );
}