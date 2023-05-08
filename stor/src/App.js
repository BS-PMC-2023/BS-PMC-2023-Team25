import "./App.css";

import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "./component/Menu";
import SignIn from "./component/SignIn";
import NewLoan from "./component/NewLoan";
import Product from "./component/Products";
import MyLoan from "./component/MyLoan";
import History from "./component/History";

import DeletePost from "./component/DeletePost.jsx";
import Manager from "./component/Manager";
import HomePage from "./component/HomePage.jsx";
import NewProd from "./component/NewProd";
import Register from "./component/Register.jsx";
import Student from "./component/Student.jsx";
import Teacher from "./component/Teacher.jsx";

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
    <div>
      <div className="App">
        <HashRouter>
          {show()}
          <Routes>
            <Route path="/manager" element={<Manager />} />
            <Route
              path="/signin"
              element={<SignIn setShowMenu={setShowMenu} />}
            />
            <Route path="/products" element={<Product prod={prod} />} />
            <Route path="/newloan" element={<NewLoan />} />
            <Route path="/myloan" element={<MyLoan />} />
            <Route path="/history" element={<History />} />
            <Route path="/" element={<HomePage />} />
            <Route
              path="/newprod"
              element={<NewProd addProduct={addProduct} />}
            />
            <Route path="/delete" element={<DeletePost />} />
            <Route path="/register" element={<Register />} />
            <Route path="/student" element={<Student />} />
            <Route path="/teacher" element={<Teacher />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
