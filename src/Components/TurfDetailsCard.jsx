import { useParams } from "react-router-dom";
// import turfs from "../pages/Data/Turfs";
import { Card, Button, Row, Col } from "react-bootstrap";
import { MdStadium } from "react-icons/md";
import { useState } from "react"; // Import useState
import "./TurfDetailsCard.css";
import { useSelector } from "react-redux";

const TurfDetailsCard = () => {
  const { id } = useParams();
  const { turfs } = useSelector((state) => state.turfs);
  const turf = turfs.find((t) => t.id === parseInt(id));
  console.log(turf);

  // Booking state for adding selected turf
  const [booking, setBooking] = useState(() => {
    const savedBookings = localStorage.getItem("bookings");
    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  // Handle booking
  const handleBooking = () => {
    const updatedBooking = [...booking, turf];
    setBooking(updatedBooking);

    // Save to localStorage for persistence
    localStorage.setItem("bookings", JSON.stringify(updatedBooking));
  };

  if (!turf) {
    return (
      <div className="no-turf text-center mt-5">
        <h4>❌ Sorry, this turf is unavailable or doesn't exist.</h4>
      </div>
    );
  }

  return (
    <div className="turf-card-wrapper">
      <Card className="shadow-lg rounded turf-details-card p-3">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
            <Card.Img
              variant="top"
              src={turf.image}
              className="turf-image img-fluid rounded"
            />
          </Col>
          <Col xs={12} md={6}>
            <Card.Body>
              <h2 className="turf-name mb-3">
                Turf Name : {turf.name} <MdStadium className="mb-2" />
              </h2>
              <p className="turf-location text-muted mb-3">
                Turf Location : {turf.location}
              </p>
              <p className="turf-rating mb-3">Turf Rating : ⭐ {turf.rating}</p>
              <p className="turf-price h5 text-success">
                Turf Price : ₹ {turf.price}
              </p>

              <div className="turf-features mt-4">
                <h5 className="mb-2">⚙️ Turf Features</h5>
                <ul className="ps-3">
                  {(turf.features || []).map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="time-slots mt-4">
                {(turf.timeSlots || []).map((slot, i) => (
                  <Button
                    key={i}
                    variant="outline-primary"
                    size="sm"
                    className="me-2 mb-2 slot-button"
                  >
                    {slot}
                  </Button>
                ))}
              </div>

              <Button
                className="book-now-button mt-4"
                variant="success"
                onClick={handleBooking} // Call handleBooking when clicked
              >
                Book Now
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default TurfDetailsCard;
