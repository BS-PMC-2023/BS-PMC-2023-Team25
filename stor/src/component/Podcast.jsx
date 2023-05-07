import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Podcast() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [seqNum, setSeqNum] = useState("");
  const [isChecked, setIsChecked] = useState(false); // add state for checkbox
  const nav = useNavigate();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const terms =
    "חדר הפודקאסט זמין לשימוש משתמשים רשומים בלבד. על המשתמש להזמין את חדר הפודקאסט מראש באמצעות מערכת ההזמנות המקוונת. ניתן להשתמש בחדר הפודקאסטים רק בשעות הפעילות של המתקן. משתמשים חייבים לעזוב את חדר הפודקאסט באותו מצב שבו הוא נמצא. כל נזק שייגרם לחדר הפודקאסט או לציוד שלו יהיה באחריות המשתמש שהזמין את החדר. אסור להכניס אוכל ושתייה לחדר הפודקאסט. יש לפנות את חדר הפודקאסטים מיד בתום מועד ההזמנה כדי לאפשר את השימוש של המשתמש הבא. המתקן שומר לעצמו את הזכות לבטל כל הזמנה מכל סיבה שהיא ללא הודעה מוקדמת. על המשתמשים לציית לכל כלל או הנחיות נוספים שיספקו צוות המתקן לגבי השימוש בחדר הפודקאסט. אי עמידה בתנאים אלה עלול לגרום להשעיה או להפסקת הרשאות החברות..";
  return (
    <div className="form">
      <div className="form-style">
        <h1>בקשה חדשה להזמנת חדר פודקאסט</h1>
        <input
          onChange={(e) => {
            setSeqNum(e.target.value);
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
              setName(e.target.value);
            }}
            type="text"
            placeholder="dd/mm/yyyy"
          />
          <label htmlFor="type">: תאריך בקשה </label>

          <br />
          <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
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
              onClick={() => {
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
