import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");

    navigate("/");
  };

  return (
    <div className="form">
      <div className="form-style">
        <h1>צור קשר</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="שם מלא"
              style={{ textAlign: "center" }}
            />
            <label htmlFor="name">:הכנס/י את שמך</label>
          </div>
          <br />
          <div className="form-field">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="כתובת דואר אלקטרוני"
              style={{ textAlign: "center" }}
            />
            <label htmlFor="email">:הכנס/י דוא״ל </label>
          </div>
          <br />
          <br />
          <div className="form-field">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="הודעה"
              style={{ width: "100%", height: "150px", textAlign: "center" }}
            ></textarea>
            <label htmlFor="message">!נחזור אליך בהקדם</label>
          </div>
          <br />
          <br />
          <div>
            <button className="buttonHome" type="submit">
              שלח
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
