import React from "react";
import { Link } from "react-router-dom";

export default function DetailRepairs(props) {
  return (
    <div>
      <h2>{props.repair.Snumber}</h2>

      <Link to={"/"}>
        <button className="buttonHome">חזור למסך הבית</button>
      </Link>
    </div>
  );
}
