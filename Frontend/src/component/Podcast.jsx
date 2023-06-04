import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PodcastDataService from "../services/podcast";

export default function Podcast() {
  const [datEvent, setDateEvent] = useState("");
  const [accMan, setAcc] = useState("false");
  const [seqNumRoom, setSeqNumRoom] = useState("");
  const [isChecked, setIsChecked] = useState("");
  const [emailLoan, setEmail] = useState("");
  const nav = useNavigate();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

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

  const terms =
    "חדר הפודקאסט זמין לשימוש משתמשים רשומים בלבד. על המשתמש להזמין את חדר הפודקאסט מראש באמצעות מערכת ההזמנות המקוונת. ניתן להשתמש בחדר הפודקאסטים רק בשעות הפעילות של המתקן. משתמשים חייבים לעזוב את חדר הפודקאסט באותו מצב שבו הוא נמצא. כל נזק שייגרם לחדר הפודקאסט או לציוד שלו יהיה באחריות המשתמש שהזמין את החדר. אסור להכניס אוכל ושתייה לחדר הפודקאסט. יש לפנות את חדר הפודקאסטים מיד בתום מועד ההזמנה כדי לאפשר את השימוש של המשתמש הבא. המתקן שומר לעצמו את הזכות לבטל כל הזמנה מכל סיבה שהיא ללא הודעה מוקדמת. על המשתמשים לציית לכל כלל או הנחיות נוספים שיספקו צוות המתקן לגבי השימוש בחדר הפודקאסט. אי עמידה בתנאים אלה עלול לגרום להשעיה או להפסקת הרשאות החברות..";
  return (
    <div className="form">
      <div className="form-style">
        <h1>בקשה חדשה להזמנת חדר פודקאסט</h1>
        <input
          onChange={(e) => {
            setSeqNumRoom(e.target.value);
          }}
          type="text"
          placeholder="מספר חדר "
        />

        <br />
        <br />
        <form>
          <input
            onChange={(e) => {
              setDateEvent(e.target.value);
            }}
            type="text"
            placeholder="d/m/y"
          />

          <br />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
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
              onClick={() => {
                addLoanPodcast(accMan, seqNumRoom, datEvent, emailLoan);
                nav("/");
              }}
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
