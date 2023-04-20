import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NewLoan() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate(); //כדי שכם יפעיל את הפונקציה שמעלה את התפריט וגם יעביר לעמוד של המשימות
  const [seqNum, setSeqNum] = useState("");
  return (
    <div className="form">
      <div className="form-style">
        <h1>השאלה חדשה</h1>
        <input
          onChange={(e) => {
            setSeqNum(e.target.value);
          }}
          type="text"
          placeholder="הכנס קוד מוצר: "
        />
        <label for="type">: הכנס קוד מוצר </label>
        <br />
        <br />
        <form>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="dd/mm/yyyy"
          />
          <label for="type">: תאריך החזרה </label>

          <br />
          <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            placeholder="סיבת השאלה"
          ></input>
          <label for="type">: סיבת השאלה </label>
          <div>
            <button
              className="buttonHome"
              onClick={() => {
                nav("/HomePage");
              }}
            >
              לדף הבית
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
