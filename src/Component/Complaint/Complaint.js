import React from "react";
import './Complaint.css';

const Complaint = ({ complaint }) => {
  return (
    <div className="complaint-container">
      <div className="complaint-card">
        <p className="id">{ complaint.id }</p>
        <p className="title">{ complaint.title }</p>
        <p className="submittedBy">Submitted By: { complaint.submittedBy }</p>
      </div>
    </div>
  );
};

export default Complaint;