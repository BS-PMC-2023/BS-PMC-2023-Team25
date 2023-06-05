import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import sce from "../images/SCE_logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function UserMenu(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
    props.setShowMenu(false);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img style={{ width: 90 }} src={sce} alt="SCE Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to={"/products"} className="nav-link">
            Products
          </Link>
          <NavDropdown title="Loans" id="basic-nav-dropdown">
            <Link to={"/newloan"} className="dropdown-item">
              New Loan
            </Link>
            <Link to={"/myloan"} className="dropdown-item">
              My Loans
            </Link>
            <Link to={"/history"} className="dropdown-item">
              Loan History
            </Link>
          </NavDropdown>
          <Link to={"/podcast"} className="nav-link">
            Podcast Room
          </Link>
          <Link to={"/student"} className="nav-link">
            Student
          </Link>
          <Link to={"/contact"} className="nav-link">
            Contact Us
          </Link>
          <Link to={"/"} className="nav-link" onClick={handleLogout}>
            Logout
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
