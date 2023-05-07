import React, { useState } from "react";
import Detail from "./Detail";

export default function OneProduct(props) {
  const [showDetail, setShowDetail] = useState(false);
  const [place, setPlace] = useState(props.product.place);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  const togglePlace = () => {
    const newPlace = place === "true" ? "false" : "true";
    setPlace(newPlace);
    props.product.place = newPlace;
  };

  const shipForRepair = () => {
    setPlace("shipped");
    // Implement code to ship the product for repair
  };

  const detailRow = showDetail ? (
    <tr>
      <td colSpan="4">
        <Detail product={props.product} />
      </td>
    </tr>
  ) : null;

  const shipButton =
    place === "false" ? (
      <span>Not in Stock</span>
    ) : place === "true" ? (
      <button onClick={shipForRepair}>Call For Repair</button>
    ) : (
      <span>In Maintenance</span>
    );

  return (
    <>
      <tr className="tr" onClick={toggleDetail}>
        <td className="td">{props.product.name}</td>
        <td className="td">{props.product.type}</td>
        <td className="td">{props.product.Snumber}</td>
        <td className="td">
          {place}{" "}
          <button onClick={togglePlace}>
            {place === "true" ? "Take out of storage" : "Put in storage"}
          </button>
        </td>
        <td className="td">{shipButton}</td>
      </tr>
      {detailRow}
    </>
  );
}
