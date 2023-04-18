import React from "react";

import { Link } from "react-router-dom";

export default function Detail(props) {
  return (
    <div>
      <button style={{ color: "pink" }}>X</button>
      <h1>{props.name}</h1>
      <h1>{props.type}</h1>
      <h1>{props.Snumber}</h1>
      <h1>{props.palce}</h1>
      <Link to={"/newloan"}>
        <button>השאלה</button>
      </Link>
    </div>
  );
}
