import React from "react";
import { Link } from "react-router-dom";

export default function DetailRev(props) {
  return (
    <div>
      <h2>
        {props.rev.email} ({props.rev.bodyMes})
      </h2>

      <Link to={"/"}>
        <button className="buttonHome">חזור למסך הבית</button>
      </Link>
    </div>
  );
}
