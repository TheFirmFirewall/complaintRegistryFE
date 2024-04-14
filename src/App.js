import { useState } from "react";
import "./App.css";

import Login from "./Component/Login/Login";
import Signup from "./Component/Signup/Signup";
import ComplaintForm from "./Component/ComplaintForm/ComplaintForm";
import Dashboard from "./Component/Dashboard/Dashboard";

function App() {
  const [isEntry, setIsEntry] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [isDashboard, setIsDashboard] = useState(true);

  const toggleIsEntry = () => {
    setIsEntry(!isEntry);
  };
  const toggleIsLogin = () => {
    setIsLogin(!isLogin);
  };
  const toggleIsDashboard = () => {
    setIsDashboard(!isDashboard);
  };

  return (
    <div className="app-container">
      {isEntry ? (
        isLogin ? (
          <Login toggle={ toggleIsLogin } />
        ) : (
          <Signup toggle={ toggleIsLogin } />
        )
      ) : isDashboard ? (
        <Dashboard />
      ) : (
        <ComplaintForm />
      )}
    </div>
  );
}

export default App;
