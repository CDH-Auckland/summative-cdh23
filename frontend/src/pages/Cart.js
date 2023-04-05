import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CartBox from "../components/CartBox";

function Cart() {
  const navigate = useNavigate();
  const [CartHistory, setCartHistory] = useState([
    {
      item_id: "0023",
      item_name: "Product name",
      item_price: "NZD$ 30",
      order_status: "PP",
      imageUrl: "../images/listeditems_1.jpg",
    },
    {
      item_id: "0027",
      item_name: "Product name",
      item_price: "NZD$ 78",
      order_status: "PS",
      imageUrl: "../images/listeditems_1.jpg",
    },
    {
      item_id: "0015",
      item_name: "Product name",
      item_price: "NZD$ 167",
      order_status: "ITD",
      imageUrl: "../images/listeditems_1.jpg",
    },
    {
      item_id: "0046",
      item_name: "Product name",
      item_price: "NZD$ 340",
      order_status: "ITDE",
      imageUrl: "../images/listeditems_1.jpg",
    },
  ]);
  const backNavigation = () => {
    navigate("/browseitems");
  };

  const cartboxDelete = (e) => {
    console.log(`Deleting selected orderhistory ${e}`);
  };

  return (
    <div className="wrapper">
      <Header title={"Cart"} backNavigation={backNavigation} />
      <div className="wrapper__sub">
        <div className="cart_titleblock paddingtop__small">
          <h3>Product added to your cart </h3>
          <div className="cart__titleblock__icon">
            <ShoppingCartOutlinedIcon />
          </div>
        </div>
        <div className="cart_orderHistoryBox">
          {CartHistory.map((cartList) => (
            <CartBox
              key={cartList.item_id}
              cartList={cartList}
              onDelete={cartboxDelete}
            />
          ))}
        </div>
        {/* Create you div here */}
      </div>
    </div>
  );
}

export default Cart;
