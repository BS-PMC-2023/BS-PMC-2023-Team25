import React from "react";
import { Link } from "react-router-dom";
import sce from "../images/SCE_logo.png";

export default function HomePage() {
  return (
    <div>
      <header>
        <div className={"App-header-left"}>
          <img style={{ width: 90 }} src={sce} />
        </div>
        <div className={"App-header-right"}> </div>
      </header>
      <div className="background-simple">
        <h1
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          ברוך הבא
        </h1>
        <h2
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          {" "}
          לניהול אחסון מקוון של המחלקה תקשורת חזותית{" "}
        </h2>
        <div>
          <p className="back-text">
            ברוכים הבאים לעמוד הבית של מחלקת תקשורת חזותית! אנו שמחים להציג את
            שירות הזמנת הציוד שלנו לתלמידים ולמורים. המחלקה לתקשורת חזותית שלנו
            מציעה מגוון ציוד שיעזור לתלמידים ולמורים לבצע את הפרויקטים היצירתיים
            שלהם. מבחר כלי הייצור שלנו כולל מצלמות, מצלמות, מקליט אודיו, אורות
            ועוד. אנו מחויבים לספק ציוד איכותי ביותר כדי לעזור לסטודנטים ולסגל
            שלנו להצליח אנו מצפים לעזור לך לממש את הפרויקטים היצירתיים שלך. אם
            יש לך שאלות או חששות, אנא אל תהסס לפנות אלינו. תודה שבחרת במחלקה
            לתקשורת חזותית
          </p>{" "}
          <Link to={"/signin"}>
            <button
              className="buttonHome "
              style={{
                marginRight: "50px",
              }}
            >
              להתחבר
            </button>
          </Link>
          <Link to={"/register"}>
            <button className="buttonHome ">להירשם</button>
          </Link>{" "}
        </div>
        <Link to={"/contact"}>
          <button className="buttonHome ">צור קשר</button>
        </Link>{" "}
      </div>
    </div>
  );
}
