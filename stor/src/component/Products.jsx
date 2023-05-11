import React, { useState, useEffect } from "react";
import OneProduct from "./OneProduct";
import Detail from "./Detail";
import Menu from "./Menu";

export default function Products(props) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
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
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
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
          לחץ על מוצר כדי להשאיל אותו{" "}
        </h3>
        <table className="table">
          <thead>
            <tr>
              <th className="th">Name of product :</th>
              <th className="th">Type :</th>
              <th className="th">Serial Number :</th>
              <th className="th">Is the product in place :</th>
              <th className="th">Repairs :</th>
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
