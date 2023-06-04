import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDataService from "../services/users";

export default function SignIn(props) {
  const [e, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const nav = useNavigate(); //כדי שכם יפעיל את הפונקציה שמעלה את התפריט וגם יעביר לעמוד של המשימות

  const loginUser = (email, password) => {
<<<<<<< HEAD
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
=======
    if (!email.endsWith("@ac.sce.ac.il") && !email.endsWith("@sce.ac.il")) {
      alert(
        "Please enter a valid email address ending with @ac.sce.ac.il or @sce.ac.il"
      );
      return;
    }
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
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
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
<<<<<<< HEAD
            type="text"
            placeholder="הזן כתובת דואל"
          />{" "}
          <label for="email"> : דואל</label>
=======
            type="email"
            placeholder="הזן כתובת דואל"
          />{" "}
          <label htmlFor="email"> : דואל</label>
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
          <br />
          <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="הזן סיסמה"
          />{" "}
<<<<<<< HEAD
          <label for="password"> :סיסמה </label>
=======
          <label htmlFor="password"> :סיסמה </label>
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
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
