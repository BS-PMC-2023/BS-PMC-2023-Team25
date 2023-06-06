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
    if (type === "student") {
      return "/student";
    } else if (type === "teacher") {
      return "/teacher";
    } else if (type === "manager") {
      return "/manager";
    }
  };

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
          alert("You are successfully registered");
          if (type === "student") {
            window.location = "#/student";
          } else if (type === "teacher") {
            window.location = "#/teacher";
          } else if (type === "admin") {
            window.location = "#/manager";
          }
          console.log("User added");
        } else {
          console.error("Error not added user: ", response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error updating product place: ", error);
      });
  };

  return (
    <div className="form">
      <div className="form-style">
        <h1>Sign Up</h1>
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
          <label htmlFor="username">User Name:</label>
          <br />
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            placeholder="Enter User Name"
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
          <label htmlFor="type">I want to sign up as:</label>
          <br />
          <select
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="please choose">Please Choose</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
          </select>
          <br />
          <br />
          <div>
            <button
              className="buttonHome"
              onClick={() => {
                addUser(e, p, t);
              }}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
