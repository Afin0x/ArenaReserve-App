import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/Login");
  };

  return (
    <>
      <section className="home" id="home">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, scale: 0.9 }} // Initial state
          animate={{ opacity: 1, scale: 1 }} // Animate to these values
          transition={{ duration: 0.5 }} // Duration of the transition
        >
          <h1>
            Welcome to <span className="green">ArenaReserve</span>
          </h1>
          <p>
            Find and book your favorite turf in seconds. Whether it's a casual
            match or a competitive tournament, we’ve got your pitch ready.
          </p>
          <button className="home-book-btn" onClick={handleBookNow}>
            Book now
          </button>
        </motion.div>
        <Footer />
      </section>
    </>
  );
};

export default Home;
