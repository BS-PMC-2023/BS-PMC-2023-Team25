<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

export default function DetailLoan(props) {
  return (
    <div>
      <h2>
        {props.loan.SnumberRoom} ({props.loan.type})
      </h2>
      <p>Serial Number: {props.product.SnumberRoom}</p>
      <p>אשר/דחה: {props.loan.acc}</p>
      {/* <Link to={"/newloan"}>
        <button className="buttonHome">השאלה</button>
      </Link> */}
    </div>
  );
}
=======
import React from "react";
import { Link } from "react-router-dom";

export default function DetailLoan(props) {
  return (
    <div>
      <h2>
        {props.loan.Snumber} ({props.loan.type})
      </h2>
      <p>Serial Number: {props.loan.Snumber}</p>
      <p>אשר/דחה: {props.loan.acc}</p>
      {/* <Link to={"/newloan"}>
        <button className="buttonHome">השאלה</button>
      </Link> */}
    </div>
  );
}
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
