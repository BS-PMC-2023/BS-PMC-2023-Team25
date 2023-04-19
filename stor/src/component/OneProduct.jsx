import React, { useState } from "react";
import Detail from "./Detail";

export default function OneProduct(props) {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  const detailRow = showDetail ? (
    <tr>
      <td colSpan="4">
        <Detail product={props.product} />
      </td>
    </tr>
  ) : null;

  return (
    <>
      <tr className="tr" onClick={toggleDetail}>
        <td className="td">{props.product.name}</td>
        <td className="td">{props.product.type}</td>
        <td className="td">{props.product.Snumber}</td>
        <td className="td">{props.product.place}</td>
      </tr>
      {detailRow}
    </>
  );
}
