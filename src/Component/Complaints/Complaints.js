import React from "react";
import "./Complaints.css";
import Complaint from '../Complaint/Complaint';

const Complaints = ({ complaintType, complaints }) => {
  return (
    <div className="main-complaints-container">
      <div className="complaints-container">
        <div className="complaints-type">
          <h3>{complaintType}</h3>
        </div>
        <div className="complaints-cards">
          {complaints.map((complaint /* Use actual complaints data here */) => (
            <Complaint complaint={complaint} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Complaints;
