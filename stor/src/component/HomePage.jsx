import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div className="App-home">
        <h1
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          Welcome
        </h1>
        <h2
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          {" "}
          לניהול אחסון מקוון של המחלקה תקשורת חזותית{" "}
        </h2>
        <div>
          {" "}
          <Link to={"/signin"}>
            <button
              className="buttonHome "
              style={{
                marginRight: "50px",
              }}
            >
              להתחבר
            </button>
          </Link>
          <Link to={"/register"}>
            <button className="buttonHome ">להירשם</button>
          </Link>{" "}
        </div>
      </div>
      <div>Text description of the website</div>
    </div>
  );
}
