<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import OneLoan from "./OneLoan";
import DetailLoan from "./DetailLoan";
import Menu from "./Menu";

export default function Loans(props) {
  const [selectedloan, setSelectedLoan] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loansPerPage, setLoanPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  console.log("all loan" + props.loan);
  // console.log("last index" + loanindexOfLastLoan);
  // console.log("firs index" + indexOfFirstLoan);
  const showDetails = () => {
    if (selectedloan) {
      return <DetailLoan loan={selectedloan} />;
    }
  };

  useEffect(() => {
    if (props.loan) {
      setTotalPages(Math.ceil(props.loan.length / loansPerPage));
    }
  }, [props.loan, loansPerPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const loanData = props.loan || []; // Use props.loan as the initial value or fallback to an empty array

  const loanindexOfLastLoan = currentPage * loansPerPage;
  const indexOfFirstLoan = loanindexOfLastLoan - loansPerPage;

  const currentLoan = loanData.slice(indexOfFirstLoan, loanindexOfLastLoan);

  const renderLoan = currentLoan.map((val, index) => {
    return <OneLoan key={index} loan={val} setSelectedLoan={setSelectedLoan} />;
  });

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <li className={`page-item ${currentPage === i ? "active" : ""}`} key={i}>
        <button className="page-link" onClick={() => paginate(i)}>
          {i}
        </button>
      </li>
    );
  }

  return (
    <div>
      <header>
        <Menu />
      </header>
      <div className="background-simple">
        <h1
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          רשימת מוצרים
        </h1>
        <h3
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          לחץ על מוצר כדי לאשר להשאיל אותו{" "}
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th className="th">מספר סיריאלי:</th>
              <th className="th">תאריך</th>
              <th className="th">מייל</th>
              <th className="th">Is the loan in place :</th>
              <th className="th">Repairs :</th>
            </tr>
          </thead>
          <tbody>{renderLoan}</tbody>
        </table>
        <nav>
          <ul className="pagination justify-content-center">{pageNumbers}</ul>
        </nav>
        {showDetails()}
      </div>
    </div>
  );
}
=======
import React, { useState, useEffect } from "react";
import OneLoan from "./OneLoan";
import DetailLoan from "./DetailLoan";
import Menu from "./Menu";

export default function Loans(props) {
  const [selectedloan, setSelectedLoan] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loansPerPage, setLoanPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  console.log("all loan" + props.loan);
  // console.log("last index" + loanindexOfLastLoan);
  // console.log("firs index" + indexOfFirstLoan);
  const showDetails = () => {
    if (selectedloan) {
      return <DetailLoan loan={selectedloan} />;
    }
  };
  console.log(props.loan);

  useEffect(() => {
    if (props.loan) {
      setTotalPages(Math.ceil(props.loan.length / loansPerPage));
    }
  }, [props.loan, loansPerPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const loanData = props.loan || []; // Use props.loan as the initial value or fallback to an empty array

  const loanindexOfLastLoan = currentPage * loansPerPage;
  const indexOfFirstLoan = loanindexOfLastLoan - loansPerPage;

  const currentLoan = loanData.slice(indexOfFirstLoan, loanindexOfLastLoan);

  const renderLoan = currentLoan.map((val, index) => {
    return <OneLoan key={index} loan={val} setSelectedLoan={setSelectedLoan} />;
  });

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <li className={`page-item ${currentPage === i ? "active" : ""}`} key={i}>
        <button className="page-link" onClick={() => paginate(i)}>
          {i}
        </button>
      </li>
    );
  }

  return (
    <div>
      <header>
        <Menu />
      </header>
      <div className="background-simple">
        <h1
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          רשימת מוצרים
        </h1>
        <h3
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          לחץ על מוצר כדי לאשר להשאיל אותו{" "}
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th className="th">מספר סיריאלי:</th>
              <th className="th">תאריך</th>
              <th className="th">מייל</th>
              <th className="th">accepted demand :</th>
            </tr>
          </thead>
          <tbody>{renderLoan}</tbody>
        </table>
        <nav>
          <ul className="pagination justify-content-center">{pageNumbers}</ul>
        </nav>
        {showDetails()}
      </div>
    </div>
  );
}
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
