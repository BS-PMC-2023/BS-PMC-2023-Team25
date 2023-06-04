import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
<<<<<<< HEAD
import PodcastDataService from "../services/podcast";

export default function Podcast() {
  const [datEvent, setDateEvent] = useState("");
  const [accMan, setAcc] = useState("false");
  const [seqNumRoom, setSeqNumRoom] = useState("");
  const [isChecked, setIsChecked] = useState("");
  const [emailLoan, setEmail] = useState("");
=======
import jsPDF from "jspdf";
import img from "../images/SCE_logo.png";

export default function Podcast() {
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [snum, setSNum] = useState("");

  const [isChecked, setIsChecked] = useState(false); // add state for checkbox
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
  const nav = useNavigate();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createPdf();
  };

<<<<<<< HEAD
  const addLoanPodcast = (acc, SnumberRoom, date, email) => {
    const data = {
      acc,
      SnumberRoom,
      date,
      email,
    };
    const jsonData = JSON.stringify(data);
    console.log(data);
    PodcastDataService.createPodcast(jsonData)
      .then((response) => {
        if (response.status === 200) {
          console.log("userloan for room podcast");
        } else {
          console.error("Error not added loan podcast : ", response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error updating product place: ", error);
      });
  };

=======
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
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
  const terms =
    "חדר הפודקאסט זמין לשימוש משתמשים רשומים בלבד. על המשתמש להזמין את חדר הפודקאסט מראש באמצעות מערכת ההזמנות המקוונת. ניתן להשתמש בחדר הפודקאסטים רק בשעות הפעילות של המתקן. משתמשים חייבים לעזוב את חדר הפודקאסט באותו מצב שבו הוא נמצא. כל נזק שייגרם לחדר הפודקאסט או לציוד שלו יהיה באחריות המשתמש שהזמין את החדר. אסור להכניס אוכל ושתייה לחדר הפודקאסט. יש לפנות את חדר הפודקאסטים מיד בתום מועד ההזמנה כדי לאפשר את השימוש של המשתמש הבא. המתקן שומר לעצמו את הזכות לבטל כל הזמנה מכל סיבה שהיא ללא הודעה מוקדמת. על המשתמשים לציית לכל כלל או הנחיות נוספים שיספקו צוות המתקן לגבי השימוש בחדר הפודקאסט. אי עמידה בתנאים אלה עלול לגרום להשעיה או להפסקת הרשאות החברות..";
  return (
    <div className="form">
      <div className="form-style" onSubmit={handleSubmit}>
        <h1>בקשה חדשה להזמנת חדר פודקאסט</h1>
        <input
          onChange={(e) => {
<<<<<<< HEAD
            setSeqNumRoom(e.target.value);
=======
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
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
          }}
          type="text"
          placeholder="מספר חדר "
        />

        <br />
        <br />
        <form>
          <input
            onChange={(e) => {
<<<<<<< HEAD
              setDateEvent(e.target.value);
=======
              setDate(e.target.value);
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
            }}
            type="text"
            placeholder="d/m/y"
          />

          <br />
          <input
            onChange={(e) => {
<<<<<<< HEAD
              setEmail(e.target.value);
=======
              setReason(e.target.value);
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
            }}
            type="text"
            placeholder="email"
          />
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
<<<<<<< HEAD
              onClick={() => {
                addLoanPodcast(accMan, seqNumRoom, datEvent, emailLoan);
                nav("/");
              }}
=======
              onClick={() => {}}
              type="submit"
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
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
