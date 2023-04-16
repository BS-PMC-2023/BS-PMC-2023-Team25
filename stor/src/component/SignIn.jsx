import React, { useState } from "react";

export default function SignIn() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>עמוד התחברות</h1>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="הזן שם משתמש/ת"
      />
      <br />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="text"
        placeholder="הזן סיסמא"
      ></input>
      <button>כניסה</button>
    </div>
  );
}
