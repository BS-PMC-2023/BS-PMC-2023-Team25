<<<<<<< HEAD
import React, { useState } from "react";
import DetailRev from "./DetailRev";
import ReviewDataService from "../services/reviews";

export default function OneRev(props) {
  const [showDetail, setShowDetail] = useState(false);
  const [email, setEmail] = useState("");
  const [bodyMes, setBodyMes] = useState("");

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  const togglePlace = () => {
    const updatedBodyMes = props.rev.bodyMes === "true" ? "false" : "true";
    const data = { email: props.rev.email, bodyMes: updatedBodyMes };
    ReviewDataService.updateOpinion(data)
      .then((response) => {
        if (response.status === 200) {
          const updatedEmail = response.data.email;
          const updatedBodyMes = response.data.bodyMes;
          const updatedDate = response.data.date;
          const updatedRev = {
            ...props.rev,
            email: updatedEmail,
            bodyMes: updatedBodyMes,
            date: updatedDate,
          };
          props.setSelectedRev(updatedRev);
        } else {
          console.error("Error updating review: ", response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error updating product place: ", error);
      });
  };

  const detailRow = showDetail ? (
    <tr>
      <td colSpan="4">
        <DetailRev rev={props.rev} />
      </td>
    </tr>
  ) : null;

  return (
    <>
      <tr className="tr" onClick={toggleDetail}>
        <td className="td">{props.rev.date}</td>
        <td className="td">{props.rev.email}</td>
        <td className="td">{props.rev.bodyMes}</td>
        <td className="td">
          <input
            type="text"
            placeholder="הכנס מייל"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="הכנס חוות דעת"
            value={bodyMes}
            onChange={(e) => setBodyMes(e.target.value)}
          />
          <button onClick={togglePlace}>
            {props.rev.bodyMes === "true" ? "הוצא מהאחסון" : "שמור באחסון"}
          </button>
        </td>
      </tr>
      {detailRow}
    </>
  );
}
=======
import React, { useState } from "react";
import DetailRev from "./DetailRev";
import ReviewDataService from "../services/reviews";

export default function OneRev(props) {
  const [showDetail, setShowDetail] = useState(false);
  const [email, setEmail] = useState("");
  const [bodyMes, setBodyMes] = useState("");

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  const togglePlace = () => {
    const updatedBodyMes = props.rev.bodyMes === "true" ? "false" : "true";
    const data = { email: props.rev.email, bodyMes: updatedBodyMes };
    ReviewDataService.updateOpinion(data)
      .then((response) => {
        if (response.status === 200) {
          const updatedEmail = response.data.email;
          const updatedBodyMes = response.data.bodyMes;
          const updatedDate = response.data.date;
          const updatedRev = {
            ...props.rev,
            email: updatedEmail,
            bodyMes: updatedBodyMes,
            date: updatedDate,
          };
          props.setSelectedRev(updatedRev);
        } else {
          console.error("Error updating review: ", response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error updating product place: ", error);
      });
  };

  const detailRow = showDetail ? (
    <tr>
      <td colSpan="4">
        <DetailRev rev={props.rev} />
      </td>
    </tr>
  ) : null;

  return (
    <>
      <tr className="tr" onClick={toggleDetail}>
        <td className="td">{props.rev.date}</td>
        <td className="td">{props.rev.email}</td>
        <td className="td">{props.rev.bodyMes}</td>
        <td className="td">
          <input
            type="email"
            placeholder="הכנס מייל"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="הכנס חוות דעת"
            value={bodyMes}
            onChange={(e) => setBodyMes(e.target.value)}
          />
          <button onClick={togglePlace}>
            {props.rev.bodyMes === "true" ? "הוצא מהאחסון" : "שמור באחסון"}
          </button>
        </td>
      </tr>
      {detailRow}
    </>
  );
}
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
