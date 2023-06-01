import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import jsPDF from "jspdf";
import img from "../images/SCE_logo.png";

export default function Podcast() {
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [snum, setSNum] = useState("");

  const [isChecked, setIsChecked] = useState(false); // add state for checkbox
  const nav = useNavigate();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
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
      { name: "title", label: "Report Of Loan Podcast Room", value: snum },

      { name: "email", label: "Student Email", value: email },
      {
        name: "number prod",
        label: "Number of the Room",
        value: snum,
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
    doc.save(`loan of ${snum}.pdf`);
    const pdfData = doc.output("datauristring");
    const link = document.createElement("a");
    link.href = pdfData;
  };
  const terms =
    "חדר הפודקאסט זמין לשימוש משתמשים רשומים בלבד. על המשתמש להזמין את חדר הפודקאסט מראש באמצעות מערכת ההזמנות המקוונת. ניתן להשתמש בחדר הפודקאסטים רק בשעות הפעילות של המתקן. משתמשים חייבים לעזוב את חדר הפודקאסט באותו מצב שבו הוא נמצא. כל נזק שייגרם לחדר הפודקאסט או לציוד שלו יהיה באחריות המשתמש שהזמין את החדר. אסור להכניס אוכל ושתייה לחדר הפודקאסט. יש לפנות את חדר הפודקאסטים מיד בתום מועד ההזמנה כדי לאפשר את השימוש של המשתמש הבא. המתקן שומר לעצמו את הזכות לבטל כל הזמנה מכל סיבה שהיא ללא הודעה מוקדמת. על המשתמשים לציית לכל כלל או הנחיות נוספים שיספקו צוות המתקן לגבי השימוש בחדר הפודקאסט. אי עמידה בתנאים אלה עלול לגרום להשעיה או להפסקת הרשאות החברות..";
  return (
    <div className="form">
      <div className="form-style" onSubmit={handleSubmit}>
        <h1>בקשה חדשה להזמנת חדר פודקאסט</h1>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="mail@gmail.com "
        />
        <label htmlFor="type">: הכנס mail </label>
        <br />
        <br />

        <input
          onChange={(e) => {
            setSNum(e.target.value);
          }}
          type="text"
          placeholder="מספר חדר "
        />
        <label htmlFor="type">: הכנס מספר חדר</label>
        <br />
        <br />
        <form>
          <input
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="text"
            placeholder="dd/mm/yyyy"
          />
          <label htmlFor="type">: תאריך בקשה </label>

          <br />
          <br />
          <input
            onChange={(e) => {
              setReason(e.target.value);
            }}
            type="text"
            placeholder="סיבת בקשה"
          />
          <label htmlFor="type">: סיבת בקשה </label>

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
