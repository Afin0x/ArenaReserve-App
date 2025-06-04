import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/authSlice"; // ⚡️ Your logout action
import "./Navbar.css";

const CustomNavbar = () => {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLogged, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY) {
      setScrollingUp(false);
    } else {
      setScrollingUp(true);
    }

    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <Navbar
        expand="md"
        className={`navbar-transparent-blur py-3 ${
          scrollingUp ? "" : "navbar-hidden"
        }`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-white">
            <span style={{ color: "#1cdb62" }}>Arena</span>
            <span style={{ color: "#ffffff" }}>Reserve</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {isLogged ? (
                <>
                  <Nav.Link
                    as={Link}
                    to="/turf-list"
                    className="text-white mx-2"
                  >
                    Home
                  </Nav.Link>

                  {user?.role === "admin" && (
                    <Nav.Link
                      as={Link}
                      to="/add-turf"
                      className="text-white mx-2"
                    >
                      Add Turf
                    </Nav.Link>
                  )}

                  <Nav.Link
                    as={Link}
                    to="/my-bookings"
                    className="text-white mx-2"
                  >
                    My bookings
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about" className="text-white mx-2">
                    About us
                  </Nav.Link>
                  <Button
                    onClick={handleLogout}
                    className="ms-md-3 mt-2 mt-md-0 px-4 btn-transparent" // Add custom transparent button class for Logout
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="success"
                    onClick={() => navigate("/login")}
                    className="ms-md-3 mt-2 mt-md-0 px-4 btn-transparent" // Same class for Login button
                  >
                    Login
                  </Button>
                  <Button
                    variant="outline-light"
                    onClick={() => navigate("/register")}
                    className="ms-md-2 mt-2 mt-md-0 px-4 btn-transparent" // Same class for Register button
                  >
                    Register
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
