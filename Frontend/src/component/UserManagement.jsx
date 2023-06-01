import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductDataService from "../services/users";

export default function UserManagement() {
  const [sn, setSn] = useState("");
  const nav = useNavigate();

  const deleteProduct = (email) => {
    ProductDataService.deleteUser(email)
      .then((response) => {
        if (response.status === 200) {
          console.log("user deleted");
        } else {
          console.error("Error updating product place : ", response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error updating product place: ", error);
      });
  };
  return (
    <div className="background-simple">
      <div className="back-page">
        <h1>Delete User</h1>{" "}
        <input
          onChange={(e) => {
            setSn(e.target.value);
          }}
          type="text"
          placeholder="אימייל
 משתמש"
        />
        <br />
        <button
          className="buttonHome"
          onClick={() => {
            deleteProduct(sn);
            nav("/manager");
          }}
        >
          מחק משתמש
        </button>
      </div>
    </div>
  );
}
