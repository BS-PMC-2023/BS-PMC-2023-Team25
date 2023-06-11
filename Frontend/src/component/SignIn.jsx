import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDataService from "../services/users";

export default function SignIn(props) {
  const [e, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const nav = useNavigate();

  const loginUser = (email, password) => {
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
          localStorage.setItem("email", email);
          if (response.data.type === "student") {
            window.location = "#/student";
          } else if (response.data.type === "teacher") {
            window.location = "#/teacher";
          } else if (response.data.type === "admin") {
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
        <h1>Sign in</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="@sce.ac.il"
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter Password"
          />
          <br />
          <br />
          <div>
            <button
              className="buttonHome"
              onClick={() => {
                loginUser(e, pass);
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
