import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import sce from "../images/SCE_logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function UserMenu(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const email = localStorage.getItem("email");

  const logoutUser = () => {
    localStorage.removeItem("email");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Link to={`/student?email=${email}`}>
        <img style={{ width: 90 }} src={sce} alt="SCE Logo" />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Loans" id="basic-nav-dropdown">
            <Link to={`/newloan?email=${email}`} className="dropdown-item">
              New Loan
            </Link>
            <Link to={`/myloan?email=${email}`} className="dropdown-item">
              My Loans
            </Link>
          </NavDropdown>
          <Link to={`/podcast?email=${email}`} className="nav-link">
            Podcast Room
          </Link>
          <Link to={`/student?email=${email}`} className="nav-link">
            Student
          </Link>
          <Link to={`/contact?email=${email}`} className="nav-link">
            Contact Us
          </Link>
          <Link to={"/"} className="nav-link" onClick={logoutUser}>
            Logout
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
