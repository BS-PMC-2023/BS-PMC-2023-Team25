// import React, { useState } from "react";
// import Detail from "./Detail";

// export default function OneProduct(props) {
//   const [showDetail, setShowDetail] = useState(false);

//   const toggleDetail = () => {
//     setShowDetail(!showDetail);
//   };

//   const detailRow = showDetail ? (
//     <tr>
//       <td colSpan="4">
//         <Detail product={props.product} />
//       </td>
//     </tr>
//   ) : null;

//   return (
//     <>
//       <tr className="tr" onClick={toggleDetail}>
//         <td className="td">{props.product.name}</td>
//         <td className="td">{props.product.type}</td>
//         <td className="td">{props.product.Snumber}</td>
//         <td className="td">{props.product.place}</td>
//       </tr>
//       {detailRow}
//     </>
//   );
// }
import React, { useState } from "react";
import Detail from "./Detail";

export default function OneProduct(props) {
  const [showDetail, setShowDetail] = useState(false);
  const [place, setPlace] = useState(props.product.place);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  const togglePlace = () => {
    const newPlace = place === "true" ? "false" : "true";
    setPlace(newPlace);
    props.product.place = newPlace;
  };

  const detailRow = showDetail ? (
    <tr>
      <td colSpan="3">
        <Detail product={props.product} />
      </td>
    </tr>
  ) : null;

  return (
    <>
      <tr className="tr" onClick={toggleDetail}>
        <td className="td">{props.product.name}</td>
        <td className="td">{props.product.type}</td>
        <td className="td">{props.product.Snumber}</td>
        <td className="td">
          {place}{" "}
          <button onClick={togglePlace}>
            {place === "true" ? "Take out of storage" : "Put in storage"}
          </button>
        </td>
      </tr>
      {detailRow}
    </>
  );
}
