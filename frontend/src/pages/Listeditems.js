import React from "react";

import ProductBox from "../components/ProductBox"; // assuming ProductBox.js is in the same directory as Listeditems.js

function Listeditems() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      author: "Author 1",
      imageUrl: "../images/listeditems_1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      author: "Author 2",
      imageUrl: "../images/listeditems_1.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      author: "Author 3",
      imageUrl: "../images/listeditems_1.jpg",
    },
  ];

  return (
    <div className="wrapper">
      <div className="listeditemsPage">
        <div className="listeditemsPage_h3section">
          <h3 className="listeditemsPage_h3-blue">
            Edit / Delete listed items
          </h3>
          
        </div>
        <div className="productList">
          {products.map((product) => (
            <ProductBox key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Listeditems;
