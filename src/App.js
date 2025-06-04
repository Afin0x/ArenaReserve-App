import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TurfList from "./pages/TurfList";
import TurfDetails from "./pages/TurfDetails";
import About from "./pages/About";  // Import AboutUs page
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./utils/ProtectedRoute";
import Profile from './pages/Profile';
import AddTurfForm from "./pages/AddTurfFForm";
import MyBooking from "./pages/MyBooking"; // Import MyBooking page

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <ToastContainer autoClose={1000} position="top-right" theme="dark" />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-turf" element={<AddTurfForm />} />

        {/* Protected Routes */}
        <Route
          path="/turf-list"
          element={
            <ProtectedRoute >
              <TurfList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/turf-details/:id"
          element={
            <ProtectedRoute>
              <TurfDetails />
            </ProtectedRoute>
          }
        />
        {/* Protected Route for My Booking */}
        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <MyBooking />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
