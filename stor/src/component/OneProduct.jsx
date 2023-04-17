import React from "react";
import { useState } from "react";
import Detail from "./Detail";
export default function OneProduct(props) {
  const [showDetail, setShoeDetail] = useState(false);

  const showMyDetail = () => {
    if (showDetail) {
      return <Detail name={props.name} type={props.type} />;
    }
  };

  return (
    <div
      onClick={() => {
        setShoeDetail(!showDetail);
      }}
      style={{ textAlign: "left" }}
    >
      <h6>
        name of product: {props.name} ,type:{props.type} ,Snumber:
        {props.Snumber} Is the product in place:{props.place}
        <br />
      </h6>
      {showMyDetail()}
    </div>
  );
}
