import { useState } from "react";
import "./App.css";
import Dashboard from "./Component/Dashboard/Dashboard";
import ComplaintForm from "./Component/ComplaintForm/ComplaintForm";

function App() {
  const [showDashboard, setShowDashboard] = useState(true);

  const togglePage = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <div className="app-container">
      {showDashboard ? (
        <Dashboard
          studentData={{
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
          ]}
          togglePage={togglePage}
        />
      ) : (
        <ComplaintForm togglePage={togglePage} />
      )}
      ;
    </div>
  );
}

export default App;
