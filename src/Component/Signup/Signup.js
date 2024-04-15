import React, { useState } from "react";
import "./Signup.css"; // Importing Signup CSS

const Signup = ({ toggleLogin, setCookie, toggleEntry }) => {

  const [email, setEmail] = useState("abc@abc.xyz");
  const [password, setPassword] = useState("pass");
  const [name, setName] = useState("name");

  const handleSignup = (e) => {
    e.preventDefault();

    const url = "http://127.0.0.1:8080/login/user";

    const body = {
      email: email,
      password: password,
      name: name
    };

    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      },
      body: JSON.stringify(body),
    }).then((response) => {
      setCookie(response.headers.get("set-cookie"));
      toggleEntry();
    }).catch((error) => {
      toggleEntry();
      // remove this and handle error later
    })
  };


  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleSignup}>Sign Up</button>
      <p>
        Already registered?
        <button onClick={toggleLogin}>Login</button>
      </p>
    </div>
  );
};

export default Signup;
