import React from "react";
import OneProduct from "./OneProduct";

export default function Products(props) {
  return (
    <div>
      <h1>רשימת מוצרים:</h1>

      {props.prod.map((val, index) => {
        return (
          <OneProduct
            name={val.name}
            type={val.type}
            Snumber={val.Snumber}
            place={val.place}
          />
        );
      })}
    </div>
  );
}
