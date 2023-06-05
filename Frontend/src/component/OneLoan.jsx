import React, { useState } from "react";
import DetailLoan from "./DetailLoan";
import LoanDataService from "../services/loans";
import Menu from "./Menu";

export default function OneLoan(props) {
  const [loan, setLoan] = useState(props.loan);
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  const togglePlace = (Snumber) => {
    const value = loan.acc;
    let acc;
    if (value === "true") {
      acc = "false";
    } else {
      acc = "true";
    }
    const data = { acc, Snumber };
    console.log(loan.Snumber);
    LoanDataService.updateLoan(data)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.value);
          const newAcc = response.data.value;
          const updatedLoanAcc = { ...loan, acc: newAcc };
          setLoan(updatedLoanAcc);
          window.location.reload(); // rafraîchit la page
        } else {
          console.error("Error updating product place: ", response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error updating product place: ", error);
      });
  };

  const detailRow = showDetail ? (
    <tr>
      <td colSpan="4">
        <DetailLoan loan={loan} />
      </td>
    </tr>
  ) : null;

  return (
    <>
      <tr className="tr" onClick={toggleDetail}>
        <td className="td">{loan.Snumber}</td>
        <td className="td">{loan.date}</td>
        <td className="td">{loan.email}</td>
        <td className="td">
          {loan.acc}{" "}
          <button onClick={() => togglePlace(loan.Snumber)}>
            {loan.acc === "true" ? "Decline Loan" : "Accept Loan "}
          </button>
        </td>
      </tr>
      {detailRow}
    </>
  );
}
