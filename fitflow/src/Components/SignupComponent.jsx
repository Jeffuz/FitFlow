import React, {useState} from "react";


export default function SignupComponent() {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function signupUser(credentials) {

    return fetch(`http://127.0.0.1:5000/signup?`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    })
    
  }
  const handleSignup = async(event) => {
    event.preventDefault();

    let result = await signupUser({email, password});
    let convert = await result.json();
    console.log(convert);
    // Fetch database
  };

  return (
    <div>
      <p>Signup Component</p>
      <form onSubmit={handleSignup}>
        <label>Email: </label> <br/>

        <input type="text" onChange={e => setEmail(e.target.value)} /> <br/>

        <label>Password: </label> <br/>

        <input type="password" onChange={e => setPassword(e.target.value)}/> <br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}