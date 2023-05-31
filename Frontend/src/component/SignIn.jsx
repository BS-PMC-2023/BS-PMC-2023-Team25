import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDataService from "../services/users";

export default function SignIn(props) {
  const [e, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const nav = useNavigate(); //כדי שכם יפעיל את הפונקציה שמעלה את התפריט וגם יעביר לעמוד של המשימות

  const loginUser = (email, password) => {
    UserDataService.loginUser(email, password)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.type);
          if (response.data.type == "student") {
            window.location = "#/student";
          } else if (response.data.type == "teacher") {
            window.location = "#/teacher";
          } else if (response.data.type == "admin") {
            window.location = "#/manager";
          }
        } else {
          console.error("Error: Unable to connect", response.data.error);
          alert("Error: Unable to connect");
        }
      })
      .catch((error) => {
        console.error("Error: Unable to connect", error);
        alert("Error: Unable to connect");
      });
  };

  return (
    <div className="form">
      <div className="form-style">
        <h1>עמוד התחברות</h1>
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
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="הזן סיסמה"
          />{" "}
          <label for="password"> :סיסמה </label>
          <br />
          <br />
          <div>
            <button
              className="buttonHome"
              onClick={() => {
                loginUser(e, pass);
              }}
            >
              להתחבר
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
