import React from "react";
import "./TurfCard.css";
import { useNavigate } from "react-router-dom";
const TurfCard = ({ turf }) => {
  const navigate = useNavigate();

  if (!turf) return null;
  const handleViewDetails = () => {
    navigate(`/turf-details/${turf.id}`);
  };

  return (
    <div className="green-card">
      <div className="card-img-container">
        <img src={turf.image} className="green-card-img" alt={turf.name} />
      </div>
      <div className="green-card-info">
        <h5 className="green-card-title">{turf.name}</h5>
        <p className="green-card-location">{turf.location}</p>
        <p className="green-card-rating">⭐ {turf.rating}</p>
        <p className="green-card-price">₹ {turf.price}/hr</p>
        <button className="green-btn" onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default TurfCard;
