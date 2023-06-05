import React, { useState, useEffect } from "react";
import OneProduct from "./OneProduct";
import Detail from "./Detail";
import UserMenu from "./UserMenu";
import studentImage from "../images/productsImage.png"; // Update the import path

export default function Products(props) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(15);
  const [totalPages, setTotalPages] = useState(1);

  const showDetails = () => {
    if (selectedProduct) {
      return <Detail product={selectedProduct} />;
    }
  };

  useEffect(() => {
    setTotalPages(Math.ceil(props.prod.length / productsPerPage));
  }, [props.prod, productsPerPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log("Current Page:", pageNumber);
  };

  const indexOfFirstProduct = (currentPage - 1) * productsPerPage;
  const indexOfLastProduct = currentPage * productsPerPage;
  const currentProducts = props.prod.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const renderProducts = currentProducts.map((val, index) => {
    return (
      <OneProduct
        key={index}
        product={val}
        setSelectedProduct={setSelectedProduct}
      />
    );
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
      <UserMenu />
      <div className="background-simple">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={studentImage}
            alt="Student"
            style={{ width: "100px", height: "auto", marginRight: "10px" }} // Adjust the width and margin as desired
          />
          <div>
            <h1
              style={{
                textAlign: "center",
                color: "white",
              }}
            >
              Products
            </h1>
            <h3
              style={{
                textAlign: "center",
                color: "white",
              }}
            >
              Click On A Product To Loan It{" "}
            </h3>
          </div>
        </div>
        <table className="table white-table">
          {" "}
          {/* Add the "white-table" class */}
          <thead>
            <tr>
              <th className="th" style={{ color: "black" }}>
                Name of product:
              </th>
              <th className="th" style={{ color: "black" }}>
                Type:
              </th>
              <th className="th" style={{ color: "black" }}>
                Serial Number:
              </th>
              <th className="th" style={{ color: "black" }}>
                Is the product in place:
              </th>
              <th className="th" style={{ color: "black" }}>
                Repairs:
              </th>
            </tr>
          </thead>
          <tbody>{renderProducts}</tbody>
        </table>
        <nav>
          <ul className="pagination justify-content-center">{pageNumbers}</ul>
        </nav>
        {showDetails()}
      </div>
    </div>
  );
}
