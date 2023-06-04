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
  const addUser = (email, password, type) => {
    const data = {
      email,
      password,
      type,
    };
    if (!email.endsWith("@ac.sce.ac.il") && !email.endsWith("@sce.ac.il")) {
      alert(
        "Please enter a valid email address ending with @ac.sce.ac.il or @sce.ac.il"
      );
      return;
    }
    const jsonData = JSON.stringify(data);
    console.log(data);
    UserDataService.createUser(data)
      .then((response) => {
        if (response.status === 200) {
          alert("you are successfuly registered");
          if (type == "student") {
            window.location = "#/student";
          } else if (type == "teacher") {
            window.location = "#/teacher";
          } else if (type == "admin") {
            window.location = "#/manager";
          }
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
        <h1>עמוד הרשמה</h1>
        <form>
          {" "}
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="הזן כתובת דואל"
          />{" "}
          <label htmlFor="email"> : דואל</label>
          <br />
          <br />
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            placeholder="הזן שם משתמש/ת"
          />{" "}
          <label htmlFor="username"> : שם משתמש</label>
          <br />
          <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="הזן סיסמא"
          ></input>
          <label htmlFor="password"> : סיסמא</label>
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
          <label htmlFor="type"> : אני רוצה להירשם בתור </label>
          <div>
            <button
              className="buttonHome"
              onClick={() => {
                addUser(e, p, t);
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
