import React from "react";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Complaints from "../Complaints/Complaints";
import "./Dashboard.css";

const Dashboard = ({
  studentData,
  floorComplaints,
  roomComplaints,
  departmentComplaints,
  togglePage,
}) => {
  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <Navbar togglePage={togglePage} />
      {/* Profile */}
      <Profile studentData={studentData} />
      {/* Complaints */}

      <Complaints complaintType={"Floor Complaints"} complaints={floorComplaints} />

      <Complaints complaintType={"Room Complaints"} complaints={roomComplaints} />
      
      <Complaints complaintType={"Department Complaints"} complaints={departmentComplaints} />
      
      <button type="button" onClick={togglePage} class="create-complaint-button">
        Create New Complaint
      </button>
    </div>
  );
};

export default Dashboard;
