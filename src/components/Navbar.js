import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm" style={{ position: "sticky", top: "0", zIndex: "9999" }}>
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav" style={{ fontSize: "18px" }}>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" style={({ isActive }) => ({ color: isActive ? "#28a745" : "#000" })}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ourProducts" style={({ isActive }) => ({ color: isActive ? "#28a745" : "#000" })}>
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" style={({ isActive }) => ({ color: isActive ? "#28a745" : "#000" })}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/videos" style={({ isActive }) => ({ color: isActive ? "#28a745" : "#000" })}>
                Videos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
