import { useNavigate } from "react-router-dom";
import { act } from "react-dom/test-utils"; // Import the 'act' function
import jsPDF from "jspdf";
import img from "../images/SCE_logo.png";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductDataService from "../services/products";
import UserMenu from "./UserMenu";

export default function NewLoan(props) {
  const [email, setEmail] = useState("");
  const [seqNum, setSeqNum] = useState("");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [product, setProduct] = useState(props.prod);
  const [isChecked, setIsChecked] = useState(false); // add state for checkbox
  const nav = useNavigate();
  console.log(props);

  const togglePlace = (Snumber) => {
    let place;
    const data = { place, Snumber };
    console.log(data);
    ProductDataService.updateProd(data)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.value);
          const newPlace = "false";
          const updatedProduct = { ...product, place: newPlace };
          setProduct(updatedProduct);
          window.location.reload(); // rafraîchit la page
        } else {
          console.error("Error updating product place: ", response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error updating product place: ", error);
      });
  };

  const handleCheckboxChange = (e) => {
    act(() => {
      setIsChecked(e.target.checked);
    });
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const seqNumParam = searchParams.get("Snumber");
  const emailParam = searchParams.get("email");

  // Utilisez la valeur de seqNumParam dans votre composant

  useEffect(() => {
    // Effectuez les actions nécessaires avec seqNumParam
    // Par exemple, mettez à jour l'état seqNum avec seqNumParam
    setSeqNum(seqNumParam);
    setEmail(emailParam);
  }, [seqNumParam]);

  const handleSubmit = (event) => {
    event.preventDefault();
    createPdf();
  };

  //const handleFile = (event, namefile) => {
  // handleUpload(event, namefile);
  //};

  const createPdf = () => {
    var doc = new jsPDF("a4");

    const imageWidth = 55;
    const imageHeight = 20;
    const imageX = doc.internal.pageSize.width / 2 - imageWidth / 2;
    const imageY = 10;
    doc.addImage(img, "PNG", imageX, imageY, imageWidth, imageHeight);

    let y = 50;

    const stateVariables = [
      { name: "title", label: "Report Of Loan", value: seqNum },

      { name: "email", label: "Student Email", value: email },
      {
        name: "number prod",
        label: "Sequence Number of The product",
        value: seqNum,
      },

      { name: "date ", label: "Date of Loan ", value: date },
      { name: "reason", label: "Reason(s) of Loan ", value: reason },
    ];

    const lineHeight = doc.getLineHeight();
    stateVariables.forEach((state, i) => {
      const lines = doc.splitTextToSize(
        `${state.label} : ${state.value}`,
        doc.internal.pageSize.width - 20
      );
      if (
        y + lines.length * doc.getLineHeight() >
        doc.internal.pageSize.height
      ) {
        doc.addPage();
        y = 10;
      }

      switch (i) {
        case 0:
          doc.setFont("", "bold");
          doc.setFontSize(20);
          doc.setTextColor("#90938C");
          doc.text(`${state.label} : ${state.value}`, 70, y);
          y += 10;
          break;
        case 1:
          doc.setFont("", "bold");
          doc.setFontSize(12);
          doc.setTextColor("black");

          doc.text(`${state.label} : ${state.value}`, 10, y);
          y += 10;
          break;
        case 2:
          doc.setFont("", "bold");
          doc.setFontSize(12);
          doc.setTextColor("black");

          doc.text(`${state.label} : ${state.value}`, 10, y);
          y += 10;
          break;
        case 3:
          doc.setFont("", "bold");
          doc.setFontSize(12);
          doc.setTextColor("black");

          doc.text(`${state.label} : ${state.value}`, 10, y);
          y += 10;
          break;
        case 4:
          doc.setFont("", "bold");
          doc.setTextColor("black");

          doc.text(`${state.label} : `, 10, y);
          y += 10;
          doc.setFont("", "");
          doc.setTextColor("black");

          let ClaimText = `${state.value}`;
          doc.text(`${state.value}`, 10, y, {
            maxWidth: 100,
          });
          y += lineHeight + ClaimText.length / 15;
          break;

        default:
      }
    });

    // handleFile(blob, `${nameSup}`);
    doc.save(`loan of ${seqNum}.pdf`);
    const pdfData = doc.output("datauristring");
    const link = document.createElement("a");
    link.href = pdfData;
  };

  const terms =
    "The Product Loan Policy outlines the terms and conditions for borrowing products from the satellite. Users are responsible for all fees incurred, including late fees, damage fees, and shipping fees. Users agree to handle the products in a careful and responsible manner and to return them in their original condition, with all parts and accessories included. Users are responsible for any damage to the products, including but not limited to accidental damage, water damage, and theft. Users agree to use the products in accordance with the manufacturer's instructions and the satellite's policy. Users agree not to use the products for any illegal or unauthorized purpose. The satellite may refuse to loan products to any user at its own discretion. The satellite may also terminate a loan at any time, for any reason. Users are responsible for providing accurate and up-to-date information when borrowing products. If you have any questions about this policy.";

  return (
    <div>
      <header>
        <UserMenu />
      </header>
      <div className="form">
        <div className="form-style" onSubmit={handleSubmit}>
          <h1>New Loan </h1>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder={email}
            readOnly={true}
          />
          <br />
          <br />
          <label htmlFor="seqNum">Serial Number:</label>
          <br />
          <input
            onChange={(e) => {
              setSeqNum(e.target.value);
            }}
            type="text"
            placeholder={seqNum}
            readOnly={true}
          />
          <br />
          <br />
          <label htmlFor="date">Return Date:</label>
          <br />
          <input
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="text"
            placeholder="dd/mm/yyyy"
          />
          <br />
          <br />
          <label htmlFor="reason">Reason For Loan:</label>
          <br />
          <input
            onChange={(e) => {
              setReason(e.target.value);
            }}
            type="text"
            placeholder="Enter Reason"
          />
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            I Accept the terms of use
          </label>
          <br />
          <br />
          <textarea
            value={terms}
            readOnly={true}
            style={{ width: "100%", height: "80px" }}
          ></textarea>
          <br />
          <br />
          <button
            className="buttonHome"
            onClick={() => {
              togglePlace(seqNum);
            }}
            type="submit"
            disabled={!isChecked}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
