import React from "react";
import "./Login.css";

const Login = ({ toggle }) => {
  const handleLogin = () => {};

  return (
    <div className="login">
      <h2>Login</h2>
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
      <p>
        Not registered? <button onClick={toggle}>SignUp</button>
      </p>
    </div>
  );
};

export default Login;
