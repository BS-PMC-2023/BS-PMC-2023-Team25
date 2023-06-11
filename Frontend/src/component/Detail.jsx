import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Detail(props) {
  const { name, type, Snumber } = props.product;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const emailParam = searchParams.get("email");

  const loanLink = `/newloan?Snumber=${Snumber}&email=${emailParam}`;

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
