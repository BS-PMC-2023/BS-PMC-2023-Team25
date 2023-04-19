import React from "react";
import { Link } from "react-router-dom";

export default function Detail(props) {
  return (
    <div>
      <h2>
        {props.product.name} ({props.product.type})
      </h2>
      <p>Product number: {props.product.Snumber}</p>
      <p>Is the product in place: {props.product.place}</p>
      <Link to={"/newloan"}>
        <button className="buttonHome">השאלה</button>
      </Link>
    </div>
  );
}
