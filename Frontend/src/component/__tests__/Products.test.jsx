import React from "react";

const Products = ({ prod }) => {
  return (
    <div>
      {prod.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <p>Type: {product.type}</p>
          <p>Serial Number: {product.serialNumber}</p>
          <p>{product.isInPlace ? "In Place" : "Not In Place"}</p>
          <div data-testid={`product-repairs-${index + 1}`}>
            {/* Render repair sections here */}
          </div>
        </div>
      ))}
    </div>
  );
};
test("placeholder test", () => {
  expect(true).toBe(true);
});


export default Products;
