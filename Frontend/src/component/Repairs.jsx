import React, { useState, useEffect } from "react";
import OneRepair from "./OneRepair";
import Menu from "./Menu";
import DetailRepairs from "./DetailRepairs";

export default function Repairs(props) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(15);
  const [totalPages, setTotalPages] = useState(1);

  const showDetails = () => {
    if (selectedProduct) {
      return <DetailRepairs repair={selectedProduct} />;
    }
  };

  useEffect(() => {
    setTotalPages(Math.ceil(props.repair.length / productsPerPage));
  }, [props.repair, productsPerPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log("Current Page:", pageNumber);
  };

  const indexOfFirstProduct = (currentPage - 1) * productsPerPage;
  const indexOfLastProduct = currentPage * productsPerPage;
  const currentProducts = props.repair.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const renderProducts = currentProducts.map((val, index) => {
    return (
      <OneRepair
        key={index}
        repair={val}
        setSelectedProduct={setSelectedProduct}
      />
    );
  });
  console.log(props.repair);
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
      <Menu />
      <div className="background-simple">
        <h1
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          Products
        </h1>

        <table className="table white-table">
          {" "}
          {/* Add the "white-table" class */}
          <thead>
            <tr>
              <th className="th">Name :</th>

              <th className="th">Serial Number :</th>
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
