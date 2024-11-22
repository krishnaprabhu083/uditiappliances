import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
    className="navbar navbar-expand-lg navbar-light shadow-sm"
    style={{
      position: "sticky",
      top: "0",
      zIndex: "9999",
      backgroundColor: "#fff",
    }}
  >
    <div className="container">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav" style={{ fontSize: "18px", gap: "20px" }}>
          <li className="nav-item">
            <NavLink
              className="nav-link d-flex align-items-center"
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#E83E8C" : "#000",
                padding: "0.5rem 1rem",
                textDecoration: "none",
                fontWeight: isActive ? "700" : "400",
                transition: "color 0.3s ease, font-weight 0.3s ease",
              })}
            >
              <i className="fas fa-home me-2"></i>Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link d-flex align-items-center"
              to="/ourProducts"
              style={({ isActive }) => ({
                color: isActive ? "#28A745" : "#000",
                padding: "0.5rem 1rem",
                textDecoration: "none",
                fontWeight: isActive ? "700" : "400",
                transition: "color 0.3s ease, font-weight 0.3s ease",
              })}
            >
              <i className="fas fa-box me-2"></i>Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link d-flex align-items-center"
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#E83E8C" : "#000",
                padding: "0.5rem 1rem",
                textDecoration: "none",
                fontWeight: isActive ? "700" : "400",
                transition: "color 0.3s ease, font-weight 0.3s ease",
              })}
            >
              <i className="fas fa-envelope me-2"></i>Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link d-flex align-items-center"
              to="/videos"
              style={({ isActive }) => ({
                color: isActive ? "#6F42C1" : "#000",
                padding: "0.5rem 1rem",
                textDecoration: "none",
                fontWeight: isActive ? "700" : "400",
                transition: "color 0.3s ease, font-weight 0.3s ease",
              })}
            >
              <i className="fas fa-video me-2"></i>Videos
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
