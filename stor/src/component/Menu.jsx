import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div style={{ display: "block" }}>
      <Link to={"/products"}>
        <button>מוצרים להשאלה</button>
      </Link>

      <Link to={"/newloan"}>
        <button>טופס להשאלה חדשה</button>
      </Link>
      <Link to={"/myloan"}>
        <button>השאלות שלי</button>
      </Link>

      <Link to={"/history"}>
        <button>הסטוריית השאלות </button>
      </Link>
      <Link to={"/"}>
        <button>התנתקות</button>
      </Link>
    </div>
  );
}
