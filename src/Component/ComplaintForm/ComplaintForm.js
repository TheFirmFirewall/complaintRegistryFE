import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./ComplaintForm.css";

const ComplaintForm = ({ togglePage }) => {
  const [formData, setFormData] = useState({
    category: "",
    location: "",
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // You can perform further actions with the form data here
    setFormData({
      category: "",
      location: "",
      title: "",
      description: "",
    });
  };

  return (
    <div className="main-complaint-form">
      <Navbar />
      <div className="form-container">
        <h2>Submit New Complaint</h2>
        <form onSubmit={handleSubmit}>
          <div className="main-form">
            <div className="form-group">
              <label>Choose Category</label>
              <div className="radio-buttons">
                <input
                  type="radio"
                  id="electrician"
                  name="category"
                  value="Electrician"
                  onChange={handleChange}
                  checked={formData.category === "Electrician"}
                />
                <label htmlFor="electrician">Electrician</label>
                <input
                  type="radio"
                  id="plumber"
                  name="category"
                  value="Plumber"
                  onChange={handleChange}
                  checked={formData.category === "Plumber"}
                />
                <label htmlFor="plumber">Plumber</label>
                <input
                  type="radio"
                  id="carpenter"
                  name="category"
                  value="Carpenter"
                  onChange={handleChange}
                  checked={formData.category === "Carpenter"}
                />
                <label htmlFor="carpenter">Carpenter</label>
              </div>
            </div>
            <div className="form-group">
              <label>Choose Location</label>
              <div className="radio-buttons">
                <input
                  type="radio"
                  id="department"
                  name="location"
                  value="Department"
                  onChange={handleChange}
                  checked={formData.location === "Department"}
                />
                <label htmlFor="department">Department</label>
                <input
                  type="radio"
                  id="hostel-floor"
                  name="location"
                  value="Hostel Floor"
                  onChange={handleChange}
                  checked={formData.location === "Hostel Floor"}
                />
                <label htmlFor="hostel-floor">Hostel Floor</label>
                <input
                  type="radio"
                  id="hostel-room"
                  name="location"
                  value="Hostel Room"
                  onChange={handleChange}
                  checked={formData.location === "Hostel Room"}
                />
                <label htmlFor="hostel-room">Hostel Room</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="title">Enter Title :</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Enter Description :</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="create-complaint-button">
            Create New Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;
