import React from "react";

import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
function OrderhistoryBox({ history }) {
  const handleStatus = () => {
    console.log(`Clear all ${history.id}'s history`);
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
        <button className="orderhistorybox_statusButton" onClick={handleStatus}>
          Order status
        </button>
      </div>
      <div className="orderhistorybox_right">
        <div className="orderhistorybox_right_icon-blue">
          <RemoveCircleOutlineOutlinedIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default OrderhistoryBox;
