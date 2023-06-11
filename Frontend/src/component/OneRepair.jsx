import React, { useState, useEffect } from "react";
import Detail from "./Detail";
import RepairDataService from "../services/repairs";
import RepairsDataService from "../services/repairs";
import DetailRepairs from "./DetailRepairs";

export default function OneRepair(props) {
  const [showDetail, setShowDetail] = useState(false);
  const [repair, setRepair] = useState(props.repair);
  const yes = "yes";
  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  const detailRow = showDetail ? (
    <tr>
      <td colSpan="4">
        <DetailRepairs repair={repair} />
      </td>
    </tr>
  ) : null;

  return (
    <>
      <tr
        className="tr"
        style={{ backgroundColor: "white" }}
        onClick={toggleDetail}
      >
        <td className="td">{repair.name}</td>
        <td className="td">{repair.Snumber}</td>
      </tr>
      {detailRow}
    </>
  );
}
