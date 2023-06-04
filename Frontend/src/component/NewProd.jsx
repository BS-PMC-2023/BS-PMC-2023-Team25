import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductDataService from "../services/products";

export default function Manager(props) {
  const [n, setName] = useState("");
  const [t, setType] = useState("");
  const [sn, setSnumber] = useState("");
  const [p, setPlace] = useState("");
  const [r, setRepair] = useState("");
  const nav = useNavigate();

  const addProd = (name, type, Snumber, place, repair) => {
    const data = {
      name,
      type,
      Snumber,
      place,
      repair,
    };
    const jsonData = JSON.stringify(data);

    ProductDataService.createProd(jsonData)
      .then((response) => {
        if (response.status === 200) {
          console.log("prod added");
        } else {
          console.error("Error updating product place: ", response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error updating product place: ", error);
      });
  };

  return (
    <div className="background-simple">
      <div className="back-page">
        <h1
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          Add a Product
        </h1>
        <label htmlFor="name">Product Name:</label>
        <br />
        <input
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Enter the product name"
        ></input>
        <br />
        <label htmlFor="type">Product Version:</label>
        <br />
        <input
          id="type"
          onChange={(e) => {
            setType(e.target.value);
          }}
          type="text"
          placeholder="Enter the product version"
        ></input>
        <br />
        <label htmlFor="snumber">Serial Number:</label>
        <br />
        <input
          id="snumber"
          onChange={(e) => {
            setSnumber(e.target.value);
          }}
          type="text"
          placeholder="Enter the serial number"
        ></input>
        <br />
        <label htmlFor="place">Product Location:</label>
        <br />
        <input
          id="place"
          onChange={(e) => {
            setPlace(e.target.value);
          }}
          type="text"
          placeholder="Is the product located?"
        ></input>
        <br />
        <label htmlFor="repair">Is the product in repair?</label>
        <br />
        <select
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="please choose">please choose</option>
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>
        <br />
        <div>
          <button
            className="buttonHome"
            onClick={() => {
              addProd(n, t, sn, p, r);
              nav("/products");
            }}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
