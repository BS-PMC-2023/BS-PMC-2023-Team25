import React, { useState } from "react";
import Menu from "./Menu";

const MessageCenter = () => {
  const [message, setMessage] = useState("");
  const [managerMessages, setManagerMessages] = useState([]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const composedMessage = `${message}\n\nManager's Messages:\n${managerMessages.join(
      "\n"
    )}`;
    setManagerMessages([...managerMessages, message]);
    setMessage("");
    console.log(composedMessage);
  };

  return (
    <div className="form">
      <Menu />
      <div className="form-style">
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
          <h1 style={{ textAlign: "center" }}>Message Center</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "20px",
                marginBottom: "20px",
              }}
            >
              <form onSubmit={handleSubmit}>
                <h2 style={{ marginBottom: "10px" }}>Add Your Message</h2>
                <textarea
                  value={message}
                  onChange={handleChange}
                  placeholder="Write a message"
                  rows={6}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    resize: "vertical",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#4caf50",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
            {managerMessages.length > 0 && (
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "20px",
                }}
              >
                <h2 style={{ marginBottom: "10px" }}>Notification Center</h2>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  {managerMessages.map((msg, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>
                      {msg}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCenter;
