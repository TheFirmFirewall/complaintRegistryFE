import React from "react";
import "./Signup.css"; // Importing Signup CSS

const Signup = ({ toggle }) => {
  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
      <p>
        Already registered?
        <button onClick={toggle}>Login</button>
      </p>
    </div>
  );
};

export default Signup;
