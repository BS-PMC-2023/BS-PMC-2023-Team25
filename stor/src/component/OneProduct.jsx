import React from "react";

export default function OneProduct(props) {
  return (
    <div style={{ textAlign: "left" }}>
      <h6>
        name of product: {props.name} ,type:{props.type} ,Snumber:
        {props.Snumber} Is the product in place:{props.place}
        <br />
      </h6>
    </div>
  );
}
