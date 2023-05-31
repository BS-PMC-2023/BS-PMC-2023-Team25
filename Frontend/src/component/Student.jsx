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
        שמח לראות אותך שוב!
      </h1>
      <h3
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        מה תרצה לעשות?
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Link to={"/productslist"}>
          <button className="buttonHome">להשאיל מוצר</button>
        </Link>
        <Link to={"/myloan"}>
          <button className="buttonHome">השאלות שלי</button>
        </Link>
        <Link to={"/Podcast"}>
          <button className="buttonHome">הזמנת חדר פודקאסט</button>
        </Link>
      </div>
    </div>
  );
}
