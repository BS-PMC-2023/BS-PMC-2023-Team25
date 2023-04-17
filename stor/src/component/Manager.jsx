import React from "react";
import { useState } from "react";

export default function Manager() {
  const [name, setName] = useState("");
  const [bodyAdd, setBodyAdd] = useState("");
  const [myIdDekete, setMyIdDelete] = useState("");
  const [body, setBody] = useState("");
  const [myId, setMyIdEdit] = useState("");
  return (
    <div style={{ display: "block" }}>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="שם מוצר"
      />
      <br />
      <input
        onChange={(e) => {
          setBodyAdd(e.target.value);
        }}
        type="text"
        placeholder="תיאור המוצר"
      />
      <br />
      <button>הוסף מוצר</button>
      <br />
      <br />
      <input
        onChange={(e) => {
          setMyIdDelete(e.target.value);
        }}
        type="text"
        placeholder="קוד המוצר"
      />
      <br />
      <button>מחק מוצר</button>
      <br />
      <br />
      <input
        onChange={(e) => {
          setMyIdEdit(e.target.value);
        }}
        type="text"
        placeholder="קוד מוצר"
      />
      <br />
      <input
        onChange={(e) => {
          setBody(e.target.value);
        }}
        type="text"
        placeholder="תיאור המוצר"
      />
      <br />
      <button>ערוך מוצר</button>
    </div>
  );
}
