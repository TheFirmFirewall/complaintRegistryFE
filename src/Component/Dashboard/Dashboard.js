// import React, { useEffect, useState } from "react";
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
  // API endpoint to retreive user data DNE
  // const [complaintData, setComplaintData] = useState({
  //   studentData: {},
  //   floorComplaints: {},
  //   roomComplaints: {},
  //   departmentComplaints: {}
  // });

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("http://127.0.0.1:8080/complaint/view", {
  //         method: "GET",
  //         headers: {
  //           'Accept': "*/*",
  //           'Content-Type': "application/json",
  //           'set-cookie': cookie
  //         }
  //       });
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch complaints');
  //       }

  //       console.log(response);
  //       setComplaintData(response.json().data);

  //       setComplaintData({
  //         studentData: {
  //           name: "John Doe",
  //           rollNumber: "123456",
  //           block: "A",
  //           roomNumber: "101",
  //           floor: "2",
  //         },
  //         floorComplaints: [
  //           {
  //             id: "#ID329",
  //             title: "Bathroom Light Not Working",
  //             submittedBy: "Aaron Lee",
  //           },
  //           {
  //             id: "#ID345",
  //             title: "Corridor Light Not Working",
  //             submittedBy: "John",
  //           },
  //           {
  //             id: "#ID378",
  //             title: "Water Tap Not Working",
  //             submittedBy: "Christopher",
  //           }
  //         ],
  //         roomComplaints: [
  //           {
  //             id: 1,
  //             title: "Leaking Faucet in Room 201",
  //             submittedBy: "John Doe",
  //           },
  //           {
  //             id: 2,
  //             title: "Broken Window in Room 305",
  //             submittedBy: "Jane Smith",
  //           }
  //         ],
  //         departmentComplaints: [
  //           {
  //             id: 3,
  //             title: "Slow Internet in IT Department",
  //             submittedBy: "Michael Brown",
  //           },
  //           {
  //             id: 4,
  //             title: "Faulty Printer in Finance Department",
  //             submittedBy: "Alice Lee",
  //           },
  //         ]
  //       });

  //       alert(complaintData.floorComplaints);

  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // })

  const complaintData = {
    studentData, floorComplaints, roomComplaints, departmentComplaints
  };

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <Navbar />
      {/* Profile */}
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

      <button
        type="button"
        onClick={toggleDashboard}
        class="create-complaint-button"
      >
        Create New Complaint
      </button>

      <button
        type="button"
        onClick={toggleEntry}
        class="create-complaint-button"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
