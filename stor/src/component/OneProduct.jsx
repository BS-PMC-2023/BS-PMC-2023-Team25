import React, { useState } from "react";
import Detail from "./Detail";
import ProductDataService from "../services/products";

export default function OneProduct(props) {
  const [showDetail, setShowDetail] = useState(false);
  const [product, setProduct] = useState(props.product);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  const togglePlace = (Snumber) => {
    const value = product.place;
    let place;
    if (value === "true") {
      place = "false";
    } else {
      place = "true";
    }
    const data = { place, Snumber };
    console.log(data);
    ProductDataService.updateProd(data)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.value);
          const newPlace = response.data.value;
          const updatedProduct = { ...product, place: newPlace };
          setProduct(updatedProduct);
          window.location.reload(); // rafraîchit la page
        } else {
          console.error("Error updating product place: ", response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error updating product place: ", error);
      });
  };

  const shipForRepair = () => {
    const updatedProduct = { ...product, place: "shipped" };
    setProduct(updatedProduct);
    // Implement code to ship the product for repair
  };

  const detailRow = showDetail ? (
    <tr>
      <td colSpan="4">
        <Detail product={product} />
      </td>
    </tr>
  ) : null;

  const shipButton =
    product.place === "false" ? (
      <span>Not in Stock</span>
    ) : product.place === "true" ? (
      <button onClick={shipForRepair}>Call For Repair</button>
    ) : (
      <span>In Maintenance</span>
    );

  return (
    <>
      <tr className="tr" onClick={toggleDetail}>
        <td className="td">{product.name}</td>
        <td className="td">{product.type}</td>
        <td className="td">{product.Snumber}</td>
        <td className="td">
          {product.place}{" "}
          <button onClick={() => togglePlace(product.Snumber)}>
            {product.place === "true"
              ? "Take out of storage"
              : "Put in storage"}
          </button>
        </td>
        <td className="td">{shipButton}</td>
      </tr>
      {detailRow}
    </>
  );
}
