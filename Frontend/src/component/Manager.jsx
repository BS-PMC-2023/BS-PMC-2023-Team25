import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import studentImage from "../images/managerImage.png"; // Update the import path

export default function Manager(props) {
  const handleLoanRequest = () => {
    props.handleLoanRequest();
  };

  return (
    <div className="background-simple">
      <Menu />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={studentImage}
          alt="Student"
          style={{ width: "100px", height: "auto", marginRight: "10px" }} // Adjust the width and margin as desired
        />
        <div>
          <h1 style={{ textAlign: "center", color: "white" }}>
            Glad To See You Again!
          </h1>
          <h3 style={{ textAlign: "center", color: "white" }}>
            What Would You Like To Do?
          </h3>
        </div>
      </div>
      <div>
        <Link to="/products">
          <button className="buttonHome">Track Storage</button>
        </Link>
        <Link to="/newprod">
          <button className="buttonHome">Add Product</button>
        </Link>
        <Link to="/delete">
          <button className="buttonHome">Delete Product</button>
        </Link>
        <Link to="/loans">
          <button className="buttonHome" onClick={props.handleLoanRequest}>
            Loan Approval
          </button>
        </Link>
        <Link to="/show">
          <button className="buttonHome" onClick={props.handleLoanRequest}>
            Loans
          </button>{" "}
        </Link>
        <Link to={"/usermanagement"}>
          <button
            className="buttonHome"
            style={{
              marginRight: "50px",
            }}
          >
            User Management
          </button>
        </Link>
      </div>
    </div>
  );
}
