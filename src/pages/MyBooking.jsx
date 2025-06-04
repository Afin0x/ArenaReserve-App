import { useState, useEffect } from "react";
import { Card, Row, Col, Button, Spinner, Container } from "react-bootstrap";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./MyBooking.css";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedBookings = localStorage.getItem("bookings");
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
    setLoading(false);
  }, []);

  const handleRemoveBooking = (id) => {
    const updatedBookings = bookings.filter((turf) => turf.id !== id);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  if (loading) {
    return (
      <div className="text-center  margin-top">
        <Spinner animation="border" variant="primary" />
        <p>Loading bookings...</p>
      </div>
    );
  }

  return (
    <Container className="mt-5 margin-top">
      <div className="my-bookings-container">
        <h2 className="text-center margin-top">My Bookings</h2>
        <Row>
          {bookings.length === 0 ? (
            <p className="text-center">You have no bookings yet.</p>
          ) : (
            bookings.map((turf) => (
              <Col xs={12} md={6} lg={4} key={turf.id}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="shadow-lg mb-4">
                    <Card.Img variant="top" src={turf.image} />
                    <Card.Body>
                      <Card.Title className="turf-name">{turf.name}</Card.Title>
                      <Card.Text className="turf-location">
                        Location: {turf.location}
                      </Card.Text>
                      <Card.Text className="turf-rating">
                        Rating: ⭐ {turf.rating}
                      </Card.Text>
                      <Card.Text className="turf-price">
                        Price: ₹ {turf.price}
                      </Card.Text>
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveBooking(turf.id)}
                      >
                        Cancel Booking
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))
          )}
        </Row>
      </div>
    </Container>
  );
};

export default MyBooking;
