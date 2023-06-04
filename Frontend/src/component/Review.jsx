<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import ReviewDataService from "../services/reviews";

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
        alert("הנתונים נשלחו בהצלחה");
        setEmail("");
        setOpinion("");
      })
      .catch((error) => {
        console.error("Error submitting opinion: ", error);
        alert("שגיאה בשליחת החוות דעת");
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
      <h1
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        חוות דעת
      </h1>
      <form onSubmit={handleSubmit}>
        <label className="th">מייל:</label>
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <br />
        <br />
        <label className="th">תוכן החוות דעת:</label>
        <textarea
          value={opinion}
          onChange={handleOpinionChange}
          required
        ></textarea>
        <br />
        <br />
        <button type="submit">שלח</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th className="th">מייל</th>
            <th className="th">תאריך</th>
            <th className="th">תוכן החוות דעת</th>
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
=======
import React, { useState, useEffect } from "react";
import ReviewDataService from "../services/reviews";

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
        alert("הנתונים נשלחו בהצלחה");
        setEmail("");
        setOpinion("");
      })
      .catch((error) => {
        console.error("Error submitting opinion: ", error);
        alert("שגיאה בשליחת החוות דעת");
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
      <h1
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        חוות דעת
      </h1>
      <form onSubmit={handleSubmit}>
        <label className="th">מייל:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <br />
        <br />
        <label className="th">תוכן החוות דעת:</label>
        <textarea
          value={opinion}
          onChange={handleOpinionChange}
          required
        ></textarea>
        <br />
        <br />
        <button type="submit">שלח</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th className="th">מייל</th>
            <th className="th">תאריך</th>
            <th className="th">תוכן החוות דעת</th>
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
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
