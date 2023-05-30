import React from "react";
import { Link } from "react-router-dom";

export default function Detail(props) {
  return (
    <div>
      <h2>
        {props.product.name} ({props.product.type})
      </h2>
      <p>Serial Number: {props.product.Snumber}</p>
      <p>Is The Product in Storage: {props.product.place}</p>
      <Link to={"/newloan"}>
        <button className="buttonHome">השאלה</button>
      </Link>
    </div>
  );
}
