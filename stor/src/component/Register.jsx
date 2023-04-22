import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn(props) {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const nav = useNavigate(); //כדי שכם יפעיל את הפונקציה שמעלה את התפריט וגם יעביר לעמוד של המשימות
  return (
    <div className="form">
      <div className="form-style">
        <h1>עמוד הַרשָׁמָה</h1>
        <form>
          {" "}
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="הזן כתובת דואל"
          />{" "}
          <label for="email"> : דואל</label>
          <br />
          <br />
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="הזן שם משתמש/ת"
          />{" "}
          <label for="username"> : שם משתמש</label>
          <br />
          <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            placeholder="הזן סיסמא"
          ></input>
          <label for="password"> : סיסמא</label>
          <br />
          <br />
          <select id="type" name="type">
            <option value="student">סטוּדֶנט</option>
            <option value="admin">מְנַהֵל</option>
            <option value="teacher">teacher </option>
          </select>
          <label for="type"> : אני רוצה להירשם בתור </label>
          <div>
            <button className="buttonHome">להירשם</button>
          </div>
        </form>
      </div>
    </div>
  );
}
