import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "./component/Menu";
import SignIn from "./component/SignIn";
import NewLoan from "./component/NewLoan";
import Product from "./component/Products";
import MyLoan from "./component/MyLoan";
import History from "./component/History";
function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <HashRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/products" element={<Product />} />
          <Route path="/newloan" element={<NewLoan />} />
          <Route path="/myloan" element={<MyLoan />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
