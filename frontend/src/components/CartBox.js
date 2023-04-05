import React from "react";
import { useState, useEffect } from "react";

import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

function CartBox({ cartList, onDelete }) {
  const [status, setStatus] = useState("");

  const deleteCartHistory = () => {
    onDelete(cartList.item_id);
  };

  useEffect(() => {
    if (cartList.order_status === "PP") {
      setStatus("Payment Processed");
    } else if (cartList.order_status === "PS") {
      setStatus("Processing with seller");
    } else if (cartList.order_status === "ITD") {
      setStatus("Item Dispatched");
    } else if (cartList.order_status === "ITDE") {
      setStatus("Item Delivered");
    }
  }, []);

  return (
    <div className="orderhistorybox">
      <div className="orderhistorybox_left">
        <img src={cartList.imageUrl} alt={cartList.name} />
      </div>
      <div className="orderhistorybox_middle">
        <div className="orderhistorybox_ordername">{cartList.item_name}</div>
        <div className="orderhistorybox_price">{cartList.item_price}</div>
        <div className="orderhistorybox_status">{status}</div>
        {/* <button className="orderhistorybox_statusButton">Order status</button> */}
      </div>
      <div className="orderhistorybox_right">
        <div
          className="orderhistorybox_right_icon-blue"
          onClick={deleteCartHistory}
        >
          <RemoveCircleOutlineOutlinedIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default CartBox;
