import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header"
import ProductBox from "../components/ProductBox"; // assuming ProductBox.js is in the same directory as Listeditems.js

function Listeditems() {
  const navigate = useNavigate();
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
  const backNavigation = () => {
    // navigate("/browseitems");
  }
  const listitemClickEvent = (e) => {
    console.log(e);
  };

  return (
    <div className="wrapper">
      <Header title={"View Listed selling items"} backNavigation={backNavigation} />
      <div className="wrapper__sub">
        <div className="listeditemsPage">
          <div className="listeditemsPage_h3section paddingtop__small">
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
