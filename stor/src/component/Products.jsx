import React, { useState } from "react";
import OneProduct from "./OneProduct";
import Detail from "./Detail";
import Menu from "./Menu";

export default function Products(props) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const showDetails = () => {
    if (selectedProduct) {
      return <Detail product={selectedProduct} />;
    }
  };
  return (
    <div>
      <header>
        <Menu />
      </header>
      <div className="background-simple">
        <h1
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          : רשימת מוצרים
        </h1>
        <h3
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          לחץ על מוצר כדי להשאיל אותו{" "}
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th className="th">Name of product :</th>
              <th className="th">Type :</th>
              <th className="th">Snumber :</th>
              <th className="th">Is the product in place :</th>
            </tr>
          </thead>
          <tbody>
            {props.prod.map((val, index) => {
              return (
                <OneProduct
                  key={index}
                  product={val}
                  setSelectedProduct={setSelectedProduct}
                />
              );
            })}{" "}
            {showDetails()}
          </tbody>{" "}
        </table>{" "}
      </div>
    </div>
  );
}
