import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import sce from "../images/SCE_logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Menu(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const email = localStorage.getItem("email");

  const logoutUser = () => {
    // Suppression de l'e-mail du stockage local
    localStorage.removeItem("email");
    // Autres étapes de déconnexion si nécessaire
  };

  return (
    <Navbar bg="light" expand="lg">
      <Link to={`/manager?email=${email}`}>
        <img style={{ width: 90 }} src={sce} alt="SCE Logo" />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to={`/products?email=${email}`} className="nav-link">
            Products
          </Link>
          <Link to={`/loans`} className="nav-link">
            Loans
          </Link>

          <NavDropdown title="User Types" id="basic-nav-dropdown">
            <Link to={`/manager?email=${email}`} className="dropdown-item">
              Manager
            </Link>
            <Link to={`/student?email=${email}`} className="dropdown-item">
              Student
            </Link>
            <Link to={`/teacher?email=${email}`} className="dropdown-item">
              Teacher
            </Link>
          </NavDropdown>
          <Link to={"/contact"} className="nav-link">
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
