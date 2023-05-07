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
  const [prod, setProduct] = useState([]);

  const addProduct = (n, t, sn, p) => {
    let temp = {
      name: n,
      type: t,
      Snumber: sn,
      place: p,
    };
    fetch("/addProduct", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        prod: temp,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFlag(!flag);
      });
  };

  useEffect(() => {
    fetch("/getData")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      });
  }, [flag]);

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
