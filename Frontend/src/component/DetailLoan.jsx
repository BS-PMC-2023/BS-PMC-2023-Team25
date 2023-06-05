import React from "react";
import { Link } from "react-router-dom";

export default function DetailLoan(props) {
  return (
    <div>
      <h2>
        {props.loan.Snumber} ({props.loan.type})
      </h2>
      <p>Serial Number: {props.loan.Snumber}</p>
      <p>Confirm/Reject: {props.loan.acc}</p>
      {/* <Link to={"/newloan"}>
        <button className="buttonHome">השאלה</button>
      </Link> */}
    </div>
  );
}
