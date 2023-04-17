import React from "react";
import { useState } from "react";

export default function DeletPost() {
  const [myId, setMyId] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setMyId(e.target.value);
        }}
        type="text"
        placeholder="קוד המוצר"
      />
      <br />
      <button>מחק מוצר</button>
    </div>
  );
}
