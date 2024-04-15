import React, { useState } from "react";
import "./Login.css";

const Login = ({ toggleLogin, toggleEntry, setCookie }) => {

  const [email, setEmail] = useState("abc@abc.xyz");
  const [password, setPassword] = useState("pass");

  const handleLogin = (e) => {
    e.preventDefault();

    const url = "http://127.0.0.1:8080/login/user";

    const body = {
      email: email,
      password: password
    };

    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      },
      body: JSON.stringify(body),
    }).then(response => {
      setCookie(response.headers.get("set-cookie"));
      toggleEntry();
    }).catch(error => {
      toggleEntry();  
      // remove this and handle error later
    })
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input type="email" value={email} placeholder={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} placeholder={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={handleLogin}>Login</button>
      <p>
        Not registered? <button onClick={toggleLogin}>SignUp</button>
      </p>
    </div>
  );
};

export default Login;
