import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate(); //כדי שכם יפעיל את הפונקציה שמעלה את התפריט וגם יעביר לעמוד של המשימות
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
      <br />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="text"
        placeholder="הזן סיסמא"
      ></input>
      <button
        onClick={() => {
          props.setShowMenu(true);
          nav("/products");
        }}
      >
        כניסה
      </button>
    </div>
  );
}
