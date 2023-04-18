import React from "react";
import { useState } from "react";

export default function AddPost() {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  return (
    <div>
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
          setBody(e.target.value);
        }}
        type="text"
        placeholder="תיאור המוצר"
      />
      <br />
      <button>הוסף מוצר</button>
    </div>
  );
}
