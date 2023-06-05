import React from "react";
import { Link } from "react-router-dom";
import sce from "../images/SCE_logo.png";

export default function HomePage() {
  return (
    <div>
      <header>
        <div className="App-header-left">
          <img style={{ width: 90 }} src={sce} alt="SCE Logo" />
        </div>
      </header>
      <div className="background-simple">
        <h1 style={{ textAlign: "center", color: "white" }}>Welcome</h1>
        <h2 style={{ textAlign: "center", color: "white" }}>
          To Online storage management of the visual communication department
        </h2>
        <p className="back-text">
          Welcome to the Visual Communication Department's homepage! Discover
          our equipment ordering service for students and teachers. From cameras
          to lights, our department offers a range of high-quality production
          tools to support your creative projects. We're dedicated to helping
          you succeed, so please reach out if you have any questions. Thank you
          for choosing us!
        </p>
        <div className="button-group">
          <Link to={"/signin"}>
            <button className="buttonHome">Sign in</button>
          </Link>
          <Link to={"/register"}>
            <button className="buttonHome">Sign up</button>
          </Link>
          <Link to={"/contact"}>
            <button className="buttonHome">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
