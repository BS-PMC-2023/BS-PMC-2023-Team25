import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { act } from "react-dom/test-utils"; // Import the 'act' function
import jsPDF from "jspdf";
import img from "../images/SCE_logo.png";

export default function NewLoan() {
  const [email, setEmail] = useState("");
  const [seqNum, setSeqNum] = useState("");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");

  const [isChecked, setIsChecked] = useState(false); // add state for checkbox
  const nav = useNavigate();
  const handleCheckboxChange = (e) => {
    act(() => {
      setIsChecked(e.target.checked);
    });
  };

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
    "המשתמש יחויב בתשלום נפרד עבור כל יום נוסף של השאלה, לפי המחיר הנקוב על ידי הלוויין. המשתמש מתחייב לטפל במוצרים בצורה המתאימה ולהחזירם במצבם המקורי. המשתמש חייב להשתמש במוצרים בהתאם להוראות היצרן והמדיניות של הלוויין. הלוויין רשאי לסרב להשאלה לפי שיקולו הפרטי. המשתמש מבטיח כי המידע שסיפק לצורך השאלת המוצרים הוא מדוייק ומעודכן.";

  return (
    <div className="form">
      <div className="form-style" onSubmit={handleSubmit}>
        <h1>השאלה חדשה</h1>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="mail@gmail.com "
        />
        <label htmlFor="type">: הכנס mail </label>
        <br />
        <br />
        <input
          onChange={(e) => {
            setSeqNum(e.target.value);
          }}
          type="text"
          placeholder="הכנס קוד מוצר: "
        />
        <label htmlFor="type">: הכנס קוד מוצר </label>
        <br />
        <br />
        <form data-testid="loan-form">
          <input
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="text"
            placeholder="dd/mm/yyyy"
          />
          <label htmlFor="type">: תאריך החזרה </label>

          <br />
          <br />
          <input
            onChange={(e) => {
              setReason(e.target.value);
            }}
            type="text"
            placeholder="סיבת השאלה"
          />
          <label htmlFor="type">: סיבת השאלה </label>

          <br />
          <br />
          <textarea
            value={terms}
            readOnly={true}
            style={{ width: "100%", height: "80px" }}
          ></textarea>
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            אני מאשר/ת את תנאי השימוש
          </label>

          <div>
            <button
              className="buttonHome"
              onClick={() => {}}
              type="submit"
              disabled={!isChecked}
            >
              שלח
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
