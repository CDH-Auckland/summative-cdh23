import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Statusmenu from "../components/Statusmenu"; // import Statusmenu component
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CartBox from "../components/CartBox";

function Cart() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(3);
  const hamburgerClick = (e) => {
    console.log(e);
  };
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
  const totalPrice = CartHistory.reduce(
    (accumulator, currentValue) =>
      accumulator + parseInt(currentValue.item_price.slice(4)),
    0
  );
  const calculateTax = (totalPrice) => {
    const taxRate = 0.13;
    const taxAmount = totalPrice * taxRate;
    return taxAmount.toFixed(2);
  };
  const taxAmount = calculateTax(totalPrice);
  const sum = totalPrice + parseFloat(taxAmount);

  const checkoutHandler = (e) => {
    console.log(`Checkout button`);
  };
  return (
    <div className="wrapper">
      <Header title={"Cart"} backNavigation={backNavigation} />
      <div className="wrapper__sub">
        <Statusmenu
          username={"John"}
          hamburgerClick={hamburgerClick}
          cartCount={cartCount}
        />
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
        <div className="cart_total">
          <h5 className="cart_total_h5-fontweight300"> Total</h5>
          <h1 className="cart_total_h1-fontweight300">${totalPrice}</h1>
        </div>

        <div className="cart_taxes_line">
          <h5 className="cart_taxes">Taxes & Fees</h5>
          <h5 className="cart_taxes_sum">${taxAmount}</h5>
        </div>

        <div className="cart_subtotal_line">
          <h5 className="cart_subtotal">SubTotal</h5>
          <h3 className="cart_subtotal_sum">${sum}</h3>
        </div>
        <button className="cart_button" onClick={checkoutHandler}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default Cart;
