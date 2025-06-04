import React from "react";
import "./Footer.css"; // Make sure to import the CSS file

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 ArenaReserve. All rights reserved.</p>
      <p>
        <a href="/privacy-policy">Privacy Policy</a> |{" "}
        <a href="/terms">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
