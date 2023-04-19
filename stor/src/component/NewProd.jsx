import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Manager(props) {
  const [name, setName] = useState("");
  const [type, setTypee] = useState("");
  const [sn, setSnumber] = useState("");
  const [place, setPlace] = useState("");
  const nav = useNavigate();
  return (
    <div className="background-simple">
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
          setTypee(e.target.value);
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
            props.addProduct(name, type, sn, place);
            nav("/products");
          }}
        >
          הוסף מוצר
        </button>
      </div>
    </div>
  );
}
