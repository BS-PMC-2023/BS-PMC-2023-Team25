import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserMenu from "./UserMenu";

export default function Manager(props) {
  return (
    <div className="background-simple">
      <UserMenu />
      <h1
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        Glad To See You Again!
      </h1>
      <h3
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        What Would You Like To Do?
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Link to={"/productslist"}>
          <button className="buttonHome">New Loan </button>
        </Link>
        <Link to={"/show"}>
          <button className="buttonHome"> My Loans</button>
        </Link>
        <Link to={"/Podcast"}>
          <button className="buttonHome">Request Podcast Room</button>
        </Link>
        <Link to={"/Review"}>
          <button className="buttonHome">Add Review</button>
        </Link>
      </div>
    </div>
  );
}
