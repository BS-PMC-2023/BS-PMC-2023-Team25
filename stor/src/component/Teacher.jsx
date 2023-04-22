import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Manager(props) {
  return (
    <div className="background-simple">
      <h1
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        ! שמח לראות אותך שוב{" "}
      </h1>
      <h3
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        ? מה תרצה לעשות{" "}
      </h3>
      <div>
        <Link to={"/products"}>
          <button
            className="buttonHome "
            style={{
              marginRight: "50px",
            }}
          >
            להשאיל מוצר{" "}
          </button>
        </Link>
        <Link to={"/myloan"}>
          <button className="buttonHome ">My loan </button>
        </Link>
      </div>
    </div>
  );
}
