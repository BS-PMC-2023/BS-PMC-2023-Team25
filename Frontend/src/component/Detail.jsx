import React from "react";
import { Link } from "react-router-dom";

export default function Detail(props) {
  const { name, type, Snumber } = props.product;

  const loanLink = `/newloan?Snumber=${Snumber}`;

  return (
    <div>
      <h2 style={{ color: "black" }}>
        {name} ({type})
      </h2>
      <p style={{ color: "black" }}>Serial Number: {Snumber}</p>
      <p style={{ color: "black" }}>
        Is The Product in Storage: {props.product.place}
      </p>
      {props.product.place === "true" && props.product.repair !== "yes" && (
        <Link to={loanLink}>
          <button className="buttonHome" style={{ color: "white" }}>
            השאלה
          </button>
        </Link>
      )}
    </div>
  );
}
