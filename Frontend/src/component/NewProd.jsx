import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductDataService from "../services/products";

export default function Manager(props) {
  const [n, setName] = useState("");
  const [t, setType] = useState("");
  const [sn, setSnumber] = useState("");
  const [p, setPlace] = useState("");
  const nav = useNavigate();

  const addProd = (name, type, Snumber, place) => {
    const data = {
      name,
      type,
      Snumber,
      place,
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
        {" "}
        <h1
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          Add a Product
        </h1>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="הכנס שם מוצר"
        ></input>
        <br />
        <input
          onChange={(e) => {
            setType(e.target.value);
          }}
          type="text"
          placeholder="הכנס גרסאת המוצר"
        ></input>
        <br />
        <input
          onChange={(e) => {
            setSnumber(e.target.value);
          }}
          type="text"
          placeholder="הכנס מספר סידורי עבור המוצר"
        ></input>
        <br />
        <input
          onChange={(e) => {
            setPlace(e.target.value);
          }}
          type="text"
          placeholder="האם המוצר נמצא במקום?"
        ></input>
        <div>
          {" "}
          <button
            className="buttonHome"
            onClick={() => {
              addProd(n, t, sn, p);
              nav("/products");
            }}
          >
            הוסף מוצר
          </button>
        </div>
      </div>
    </div>
  );
}
