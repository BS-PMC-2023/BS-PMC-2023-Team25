import React from "react";
import { useState } from "react";

export default function DeletPost() {
  const [myId, setMyId] = useState("");
  return (
    <div className="background-simple">
      <input
        onChange={(e) => {
          setMyId(e.target.value);
        }}
        type="text"
        placeholder="קוד המוצר"
      />
      <br />
      <button className="buttonHome">מחק מוצר</button>
    </div>
  );
}
