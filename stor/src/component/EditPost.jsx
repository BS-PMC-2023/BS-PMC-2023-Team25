import React from "react";
import { useState } from "react";

export default function EditPost() {
  const [myId, setMyId] = useState("");
  const [body, setBody] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setMyId(e.target.value);
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
