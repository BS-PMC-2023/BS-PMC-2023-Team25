import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

export default function Menu() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ display: isLoggedIn ? "block" : "none" }}>
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
        <button onClick={handleLogout}>התנתקות</button>
      </Link>
      <Link to={"/manager"}>
        <button>מנהל</button>
      </Link>
    </div>
  );
}
