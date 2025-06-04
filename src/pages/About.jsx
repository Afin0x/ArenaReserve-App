import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const openLinkedIn = (url) => {
    window.open(url, "_blank");
  };

  return (
    <motion.div
      className="about-us"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1>Welcome to Arena Reserve</h1>
        <p>
          Your premier destination for reserving sports venues effortlessly.
        </p>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="mission"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Our Mission</h2>
        <p>
          At Arena Reserve, our mission is to provide a seamless, user-friendly
          platform for booking sports venues. We aim to make reserving your
          favorite sports venues quick, easy, and hassle-free, so you can focus
          on the game.
        </p>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="features"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>What We Offer</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Easy Booking</h3>
            <p>Book your desired sports venue in just a few clicks.</p>
          </div>
          <div className="feature-item">
            <h3>Real-Time Availability</h3>
            <p>
              Check venue availability instantly to plan your sessions without
              delay.
            </p>
          </div>
          <div className="feature-item">
            <h3>Secure Payment</h3>
            <p>
              We provide safe and secure payment methods to confirm your
              bookings.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us!</p>
        <p>
          Email:{" "}
          <a href="mailto:support@arenreserve.com">support@arenreserve.com</a>
        </p>
        <p>Phone: +123-456-7890</p>
      </motion.section>
    </motion.div>
  );
};

export default About;
