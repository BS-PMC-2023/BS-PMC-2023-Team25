import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { act } from "react-dom/test-utils";

export default function NewLoan() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [seqNum, setSeqNum] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const nav = useNavigate();

  const handleCheckboxChange = (e) => {
    act(() => {
      setIsChecked(e.target.checked);
    });
  };

  const terms =
    "המשתמש יחויב בתשלום נפרד עבור כל יום נוסף של השאלה, לפי המחיר הנקוב על ידי הלוויין. המשתמש מתחייב לטפל במוצרים בצורה המתאימה ולהחזירם במצבם המקורי. המשתמש חייב להשתמש במוצרים בהתאם להוראות היצרן והמדיניות של הלוויין. הלוויין רשאי לסרב להשאלה לפי שיקולו הפרטי. המשתמש מבטיח כי המידע שסיפק לצורך השאלת המוצרים הוא מדוייק ומעודכן.";

  return (
    <div className="form">
      <div className="form-style">
        <h1>השאלה חדשה</h1>
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
              setName(e.target.value);
            }}
            type="text"
            placeholder="dd/mm/yyyy"
          />
          <label htmlFor="type">: תאריך החזרה </label>

          <br />
          <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
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
