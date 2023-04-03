import React from "react";

import ProductBox from "../components/ProductBox"; // assuming ProductBox.js is in the same directory as Listeditems.js

function Listeditems() {
  const product = [
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

  const listitemClickEvent = (e) => {
    console.log(e);
  };

  return (
    <div className="wrapper">
      <div className="wrapper__sub">
        <div className="listeditemsPage">
          <div className="listeditemsPage_h3section">
            <h3 className="listeditemsPage_h3-blue">
              Edit / Delete listed items
            </h3>
          </div>
          <div className="productList">
            {product.map((product) => (
              <ProductBox
                key={product.id}
                id={product.id}
                name={product.name}
                author={product.author}
                listitemClickEvent={listitemClickEvent}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listeditems;
