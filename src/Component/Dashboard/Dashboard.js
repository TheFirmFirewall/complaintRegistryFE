import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Complaints from "../Complaints/Complaints";
import "./Dashboard.css";

const Dashboard = ({
  studentData,
  floorComplaints,
  roomComplaints,
  departmentComplaints,
  toggleDashboard,
  toggleEntry,
  cookie
}) => {

  const complaintData = {
    studentData, floorComplaints, roomComplaints, departmentComplaints
  };

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <Navbar />
      {/* Profile */}
      <Profile studentData={complaintData.studentData} />
      <Profile studentData={complaintData.studentData} />
      {/* Complaints */}

      <Complaints
        complaintType={"Floor Complaints"}
        complaints={complaintData.floorComplaints}
      />

      <Complaints
        complaintType={"Room Complaints"}
        complaints={complaintData.roomComplaints}
      />

      <Complaints
        complaintType={"Department Complaints"}
        complaints={complaintData.departmentComplaints}
      />

      <div className="navigate-buttons-container">
        <button
          type="button"
          onClick={toggleDashboard}
          class="navigate-button"
        >
          Create New Complaint
        </button>

        <button
          type="button"
          onClick={toggleEntry}
          class="navigate-button"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
