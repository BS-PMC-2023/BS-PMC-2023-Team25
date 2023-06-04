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
          console.log("logged");
          window.location = "/products?#/products"; // redirect to products page on successful login
        } else {
          console.error("Error cant connect : ", response.data.error);
          alert(`Error: Error cant connect`);
        }
      })
      .catch((error) => {
        console.error("Error cant connect: ", error);
        alert(`Error: Error cant connect`);
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
