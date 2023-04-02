import React from "react";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

function OrderhistoryBox({ history, onDelete }) {
  const deleteOrderHistory = () => {
    console.log(`Deleting product ${history.id}`);
    onDelete(history.id);
  };

  return (
    <div className="orderhistorybox">
      <div className="orderhistorybox_left">
        <img src={history.imageUrl} alt={history.name} />
      </div>
      <div className="orderhistorybox_middle">
        <div className="orderhistorybox_infopart">
          <div className="orderhistorybox_ordername">{history.ordername}</div>
          <div className="orderhistorybox_price">{history.price}</div>
        </div>
        <button className="orderhistorybox_statusButton">Order status</button>
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
