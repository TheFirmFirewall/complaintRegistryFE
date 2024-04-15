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
  const [cookie, setCookie] = useState('');

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
          <Login toggleLogin={toggleIsLogin} toggleEntry={toggleIsEntry} setCookie={setCookie} />
        ) : (
          <Signup toggleLogin={toggleIsLogin} setCookie={setCookie} toggleEntry={toggleIsEntry} />
        )
      ) : isDashboard ? (
        <Dashboard studentData={{
          name: "John Doe",
          rollNumber: "123456",
          block: "A",
          roomNumber: "101",
          floor: "2",
        }}
          floorComplaints={[
            // Replace with your actual complaint data
            {
              id: "#ID329",
              title: "Bathroom Light Not Working",
              submittedBy: "Aaron Lee",
            },
            {
              id: "#ID345",
              title: "Corridor Light Not Working",
              submittedBy: "John",
            },
            {
              id: "#ID378",
              title: "Water Tap Not Working",
              submittedBy: "Christopher",
            },
          ]}
          roomComplaints={[
            // Optional - Sample data for room complaints
            {
              id: 1,
              title: "Leaking Faucet in Room 201",
              submittedBy: "John Doe",
            },
            {
              id: 2,
              title: "Broken Window in Room 305",
              submittedBy: "Jane Smith",
            },
          ]}
          departmentComplaints={[
            // Optional - Sample data for department complaints
            {
              id: 3,
              title: "Slow Internet in IT Department",
              submittedBy: "Michael Brown",
            },
            {
              id: 4,
              title: "Faulty Printer in Finance Department",
              submittedBy: "Alice Lee",
            },
          ]} toggleDashboard={toggleIsDashboard} toggleEntry={toggleIsEntry} cookie={cookie} />
      ) : (
        <ComplaintForm toggleDashboard={toggleIsDashboard} />
      )}
    </div>
  );
}

export default App;
