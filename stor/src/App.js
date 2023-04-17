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
import Manager from "./component/Manager";
function App() {
  const [showMenu, setShowMenu] = useState(false); //אחראי על הצגת התפריט
  const [prod, setProduct] = useState([
    //camera
    { name: "camera", type: "Sony A7III", Snumber: "4476762", place: "true" },
    { name: "camera", type: "Sony A7III", Snumber: "4477024", place: "true" },
    { name: "camera", type: "Sony A7III", Snumber: "4477009", place: "true" },
    { name: "camera", type: "Sony A7III", Snumber: "4476730", place: "true" },
    { name: "camera", type: "Sony A7III", Snumber: "4476731", place: "true" },
    { name: "camera", type: "Sony A7III", Snumber: "4476732", place: "true" },
    { name: "camera", type: "Sony A7III", Snumber: "447673", place: "true" },
    { name: "camera", type: "Sony A7III", Snumber: "4477025", place: "true" },
    { name: "camera", type: "Sony A7III", Snumber: "4477008", place: "true" },
    { name: "camera", type: "Sony A7III", Snumber: "4476733", place: "true" },

    // ------
    {
      name: "camera",
      type: "Panasonic DC-S5",
      Snumber: "WJBA001375",
      place: "true",
    },
    {
      name: "camera",
      type: "Panasonic DC-S5",
      Snumber: "WJBA001396",
      place: "true",
    },
    {
      name: "camera",
      type: "Panasonic DC-S5",
      Snumber: "WJBA001397",
      place: "true",
    },
    {
      name: "camera",
      type: "Panasonic DC-S5",
      Snumber: "WJBA001400",
      place: "true",
    },
    {
      name: "camera",
      type: "Panasonic DC-S5",
      Snumber: "WJBA001399",
      place: "true",
    },
    {
      name: "camera",
      type: "Panasonic DC-S5",
      Snumber: "WJCA001283",
      place: "true",
    },
    {
      name: "camera",
      type: "Panasonic DC-S5",
      Snumber: "WJCA001273",
      place: "true",
    },
    {
      name: "camera",
      type: "Panasonic DC-S5",
      Snumber: "WJCA001275",
      place: "true",
    },
    {
      name: "camera",
      type: "Panasonic DC-S5",
      Snumber: "WJBA001411",
      place: "true",
    },
    {
      name: "camera",
      type: "Panasonic DC-S5",
      Snumber: "WJCA001289",
      place: "true",
    },

    // ---
    {
      name: "camera",
      type: "Sony A7III lens 105",
      Snumber: "4663360",
      place: "true",
    },
    {
      name: "camera",
      type: "Sony A7III lens 105",
      Snumber: "4658456",
      place: "true",
    },
  ]);
  const addProduct = (n, t, sn, p) => {
    let temp = {
      name: n,
      type: t,
      Snumber: sn,
      place: p,
    };
    setProduct([temp, ...prod]);
  };
  const show = () => {
    //פונקציית הצגת התפריט
    if (showMenu) {
      return <Menu />;
    }
  };
  return (
    <div className="App">
      <HashRouter>
        {show()}
        <Routes>
          <Route
            path="/manager"
            element={<Manager addProduct={addProduct} />}
          />
          <Route path="/" element={<SignIn setShowMenu={setShowMenu} />} />
          <Route path="/products" element={<Product prod={prod} />} />
          <Route path="/newloan" element={<NewLoan />} />
          <Route path="/myloan" element={<MyLoan />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
