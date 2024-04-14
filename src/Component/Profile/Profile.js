import React from "react";
import "./Profile.css";

const Profile = ({ studentData }) => {
  return (
    <div className="main-profile-container">
      <div className="profile-container">
        <div className="profile-head">
          <p className="name">{studentData.name}</p>
          <p className="others">Computer Science</p>
          <p className="others">2020-2024</p>
        </div>
        <div className="profile-details">
          <table border="0">
            <tr>
              <td>Roll Number</td>
              <td>{studentData.rollNumber}</td>
            </tr>
            <tr>
              <td>Block</td>
              <td>{studentData.block}</td>
            </tr>
            <tr>
              <td>Room Number</td>
              <td>{studentData.roomNumber}</td>
            </tr>
            <tr>
              <td>Floor</td>
              <td>{studentData.floor}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
