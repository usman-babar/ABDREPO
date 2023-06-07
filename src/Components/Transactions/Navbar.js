import React from "react";
import { NavLink } from "react-router-dom";

const navbarStyle = {
  background: "#203141",
  height: "60px", // Adjust the height value as needed
};

const linkStyle = {
  fontSize: "20px",
  marginRight: "20px",
  marginLeft: "20px", // Add this property to align the link to the left
  color: "white",
  textDecoration: "none",
  lineHeight: "60px", // Center the link vertically within the navbar
  transition: "color 0.3s ease", // Add transition for smooth hover effect
};

const linkHoverStyle = {
  color: "gray", // Change the link color on hover
};

export default function Navbar() {
  return (
    <div style={navbarStyle}>
      <nav>
        <NavLink to="/" style={linkStyle} exact activeStyle={linkHoverStyle}>
          Bank Management System
        </NavLink>
        <NavLink to="/withdraw" style={linkStyle} activeStyle={linkHoverStyle}>
          Withdraw Amount
        </NavLink>
        <NavLink to="/deposit" style={linkStyle} activeStyle={linkHoverStyle}>
          Deposit Amount
        </NavLink>
        <NavLink to="/all" style={linkStyle} activeStyle={linkHoverStyle}>
          View Transactions
        </NavLink>
        <NavLink to="/add" style={linkStyle} activeStyle={linkHoverStyle}>
          Create New Account
        </NavLink>
        <NavLink to="/thirdapi" style={linkStyle} activeStyle={linkHoverStyle}>
          Third Party Payment
        </NavLink>
      </nav>
    </div>
  );
}
