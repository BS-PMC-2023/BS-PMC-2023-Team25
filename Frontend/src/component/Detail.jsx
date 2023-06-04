import React from "react";
import { Link } from "react-router-dom";

export default function Detail(props) {
  const { name, type, Snumber } = props.product;

  const loanLink = `/newloan?Snumber=${Snumber}`;

  return (
    <div>
      <h2>
        {name} ({type})
      </h2>
      <p>Serial Number: {Snumber}</p>
      <p>Is The Product in Storage: {props.product.place}</p>
      {props.product.place === "true" && props.product.repair !== "yes" && (
        <Link to={loanLink}>
          <button className="buttonHome">השאלה</button>
        </Link>
      )}
    </div>
  );
}
