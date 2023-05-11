import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UserDataService from "../services/users";

export default function SignIn(props) {
  const [t, setType] = useState("");
  const [u, setUserName] = useState("");
  const [p, setPassword] = useState("");
  const [e, setEmail] = useState("");

  const NavPage = (t) => {
    const type = t;
    if (type == "student") {
      return "/student";
    } else if (type == "teacher") {
      return "/teacher";
    } else if (type == "manager") {
      return "/manager";
    }
  };
  //כדי שכם יפעיל את הפונקציה שמעלה את התפריט וגם יעביר לעמוד של המשימות
  let nav = useNavigate;
  const addUser = (email, username, password, type) => {
    const data = {
      email,
      username,
      password,
      type,
    };
    const jsonData = JSON.stringify(data);
    console.log(data);
    UserDataService.createUser(jsonData)
      .then((response) => {
        if (response.status === 200) {
          console.log("user added");
        } else {
          console.error("Error not added user : ", response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error updating product place: ", error);
      });
  };
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
              setUserName(e.target.value);
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
          <select
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="please choose">please choose</option>
            <option value="student">student</option>
            <option value="admin">admin</option>
            <option value="teacher">teacher </option>
          </select>
          <label for="type"> : אני רוצה להירשם בתור </label>
          <div>
            <button
              className="buttonHome"
              onClick={() => {
                addUser(e, u, p, t);
              }}
            >
              להירשם
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
