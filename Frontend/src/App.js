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
import ProductDataService from "./services/products";
import UsersDataService from "./services/users";
import Podcast from "./component/Podcast";
import PodcastDataService from "./services/podcast";
import Loans from "./component/Loans.jsx";
import StudioLoans from "./component/StudioLoans.jsx";
import StudioDataService from "./services/studio";
import Review from "./component/Review";
import ReviewDataService from "./services/reviews";
import LoanDataService from "./services/loans";
import NotificationCenter from "./component/NotificationCenter";

import Show from "./component/Show";
import Contact from "./component/Contact";
import UserManagement from "./component/UserManagement";
import Products from "./component/Products";
import ProductsUsers from "./component/ProductsUsers";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [UserMenu, setShowUserMenu] = useState(false);
  const [prod, setProduct] = useState([]);
  const [loan, setLoan] = useState([]);
  const [revi, setRevi] = useState([]);
  const [studio, setStudio] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [studios, setStudios] = useState([]);
  const [loanData, setLoanData] = useState([]);
  const [showLoanData, setShowLoanData] = useState(false);
  //const navigate = useNavigate();
  const handleLoanRequest = () => {
    Promise.all([PodcastDataService.getAll(), StudioDataService.getAll()])
      .then((responses) => {
        const podcastResponse = responses[0].data.podcast;
        const studioResponse = responses[1].data.studio;
        setPodcasts(podcastResponse);
        setStudios(studioResponse);
        setLoanData(podcastResponse);
        setShowLoanData(true);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const retrieveOpinion = () => {
    ReviewDataService.getAll()
      .then((response) => {
        setRevi(response.data.opinion);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveLoan = () => {
    LoanDataService.getAll()
      .then((response) => {
        setLoan(response.data.loans);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateReviews = (newReview) => {
    setRevi([...revi, newReview]);
  };

  const updateStudio = (newStudio) => {
    setRevi([...studio, newStudio]);
  };
  const retrieveStudio = () => {
    StudioDataService.getAll()
      .then((response) => {
        setRevi(response.data.studio);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveProducts = () => {
    ProductDataService.getAll()
      .then((response) => {
        setProduct(response.data.products);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveProducts();
    retrieveOpinion();
    retrieveLoan();
  }, []);

  const showUser = () => {
    //פונקציית הצגת התפריט
    if (showMenu) {
      return <UserMenu setShowUserMenu={setShowUserMenu} />;
    }
  };

  const show = () => {
    //פונקציית הצגת התפריט
    if (showMenu) {
      return <Menu setShowMenu={setShowMenu} />;
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
            <Route path="/products" element={<Products prod={prod} />} />
            <Route path="/newloan" element={<NewLoan prod={prod} />} />
            <Route path="/myloan" element={<MyLoan />} />
            <Route path="/Podcast" element={<Podcast />} />
            <Route path="/history" element={<History />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/newprod" element={<NewProd />} />
            <Route path="/delete" element={<DeletePost />} />
            <Route path="/register" element={<Register />} />
            <Route path="/student" element={<Student />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/notificationcenter" element={<NotificationCenter />} />
            <Route
              path="/productslist"
              element={<ProductsUsers prod={prod} />}
            />
            <Route
              path="/show"
              element={
                <Show podcasts={podcasts} studios={studios} loan={loan} />
              }
            />
            <Route
              path="/studioLoan"
              element={
                <StudioLoans
                  studio={studio}
                  setStudio={setStudio}
                  updateStudio={updateStudio}
                />
              }
            />
            <Route
              path="/review"
              element={
                <Review
                  revi={revi}
                  setRevi={setRevi}
                  updateReviews={updateReviews}
                />
              }
            />
            <Route path="/Loans" element={<Loans loan={loan} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/usermanagement" element={<UserManagement />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
