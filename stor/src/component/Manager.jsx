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
    <div>
      <h1>עמוד מנהל</h1>
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

      <button
        onClick={() => {
          props.addProduct(name, type, sn, place);
          nav("/products");
        }}
      >
        הוסף מוצר
      </button>
    </div>
  );
}
