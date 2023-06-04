import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD

const Manager = (props) => {
  const handleLoanRequest = () => {
    props.handleLoanRequest();
  };

=======

export default function Manager(props) {
  const handleLoanRequest = () => {
    props.handleLoanRequest();
  };

>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
  return (
    <div className="background-simple">
      <h1 style={{ textAlign: "center", color: "white" }}>
        שמח לראות אותך שוב!
      </h1>
      <h3 style={{ textAlign: "center", color: "white" }}>מה תרצה לעשות?</h3>
      <div>
        <Link to="/products">
          <button className="buttonHome">מעקב אחר אחסון</button>
<<<<<<< HEAD
        </Link>
        <Link to="/newprod">
          <button className="buttonHome">הוסף מוצר</button>
        </Link>
        <Link to="/delete">
          <button className="buttonHome">למחוק מוצר</button>
        </Link>
        <Link to="/show">
          <button className="buttonHome" onClick={props.handleLoanRequest}>
            בקשת השאלות
=======
        </Link>
        <Link to="/newprod">
          <button className="buttonHome">הוסף מוצר</button>
        </Link>
        <Link to="/delete">
          <button className="buttonHome">למחוק מוצר</button>
        </Link>
        <Link to="/loans">
          <button className="buttonHome" onClick={props.handleLoanRequest}>
            בקשת השאלות
          </button>
        </Link>
        <Link to="/show">
          <button className="buttonHome" onClick={props.handleLoanRequest}>
            השאלות
          </button>{" "}
        </Link>
        <Link to={"/usermanagement"}>
          {" "}
          {}
          <button
            className="buttonHome "
            style={{
              marginRight: "50px",
            }}
          >
            ניהול משתמשים
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
          </button>
        </Link>
        <Link to={"/usermanagement"}>
          {" "}
          {}
          <button
            className="buttonHome "
            style={{
              marginRight: "50px",
            }}
          >
            ניהול משתמשים
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Manager;
