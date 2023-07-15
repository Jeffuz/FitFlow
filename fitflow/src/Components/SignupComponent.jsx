import React, {useState} from "react";

const PASSWORDLENGTH = '8';
const NUMBEROFCAPITALLETTERS = '1';

export default function SignupComponent() {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isMatchingPassword, setIsMatchingPassword] = useState(false);

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
  const handleSignup = async(event) => {
    event.preventDefault();

    const emailCheck = /[\w]+@[A-Za-z]+\.(.){3,}/g
    const passLengthCheck = /(.+){6,}/g
    const passSpecialCharacterCheck = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]+/g
    const passUpperCaseCheck = /[A-Z]+/g

    let isValidEmail = emailCheck.test(email);
    let isPLength = passLengthCheck.test(password);
    let isPSpecial = passSpecialCharacterCheck.test(password);
    let isPUpper = passUpperCaseCheck.test(password);

    if(!isValidEmail){
      //setErrorMessage("Email is Invalid");
      console.log("Email Invladi");
      return;
    }

    if(!isPLength || !isPSpecial || !isPUpper || !isMatchingPassword) {
      console.log("Password Invalid");
      return;      
    }



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

        <label>Confirm Password: </label> <br/>

        <input type="password" onChange={checkMatchingPassword}/> <br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}