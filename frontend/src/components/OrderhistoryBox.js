import React from "react";
import { useState, useEffect } from 'react';



import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

function OrderhistoryBox({ history, onDelete }) {
  const [status, setStatus] = useState("");


  const deleteOrderHistory = () => {
    console.log(`Deleting selected orderhistory ${history.id}`);
    onDelete(history.item_id);
  };

  useEffect(() => {
    if (history.order_status === "PP") {
      setStatus("Payment Processed");
    } else if (history.order_status === "PS") {
      setStatus("Processing with seller");
    } else if (history.order_status === "ITD") {
      setStatus("Item Dispatched");
    } else if (history.order_status === "ITDE") {
      setStatus("Item Delivered");
    }
  }, []);



  return (
    <div className="orderhistorybox">
      <div className="orderhistorybox_left">
        <img src={history.imageUrl} alt={history.name} />
      </div>
      <div className="orderhistorybox_middle">
        <div className="orderhistorybox_ordername">{history.item_name}</div>
        <div className="orderhistorybox_price">{history.item_price}</div>
        <div className="orderhistorybox_status">{status}</div>
        {/* <button className="orderhistorybox_statusButton">Order status</button> */}
      </div>
      <div className="orderhistorybox_right">
        <div
          className="orderhistorybox_right_icon-blue"
          onClick={deleteOrderHistory}
        >
          <RemoveCircleOutlineOutlinedIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default OrderhistoryBox;
