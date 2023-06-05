import React, { useState, useEffect } from "react";
import ReviewDataService from "../services/reviews";
import UserMenu from "./UserMenu";

export default function Review() {
  const [email, setEmail] = useState("");
  const [opinion, setOpinion] = useState("");
  const [opinions, setOpinions] = useState([]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOpinionChange = (e) => {
    setOpinion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      bodyMes: opinion,
      date: new Date().toISOString(),
    };

    ReviewDataService.createOpinion(data)
      .then((response) => {
        console.log("Opinion submitted successfully");
        alert("successful");
        setEmail("");
        setOpinion("");
      })
      .catch((error) => {
        console.error("Error submitting opinion: ", error);
        alert("Error submitting opinion:");
      });
  };

  useEffect(() => {
    ReviewDataService.getAll()
      .then((response) => {
        setOpinions(response.data.opinions);
      })
      .catch((error) => {
        console.error("Error retrieving opinions: ", error);
      });
  }, []);

  return (
    <div className="background-simple">
      <UserMenu />
      <h1 style={{ textAlign: "center", color: "white" }}>Reviews</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label className="th">Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          style={{ marginBottom: "15px", width: "250px" }}
        />
        <label className="th">Add Review:</label>
        <textarea
          value={opinion}
          onChange={handleOpinionChange}
          required
          style={{ marginBottom: "15px", minHeight: "100px", width: "500px" }}
        ></textarea>
        <button type="submit" style={{ width: "100px" }}>
          Submit
        </button>
      </form>

      <table
        className="table white-table"
        style={{
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          width: "1000px",
        }}
      >
        <thead>
          <tr>
            <th className="th">Review</th>
            <th className="th">Date</th>
            <th className="th">Email</th>
          </tr>
        </thead>
        <tbody>
          {opinions.map((opinion) => (
            <tr key={opinion._id}>
              <td>{opinion.email}</td>
              <td>{opinion.date}</td>
              <td>{opinion.bodyMes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
