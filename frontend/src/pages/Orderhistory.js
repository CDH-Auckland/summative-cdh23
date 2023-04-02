import React from "react";

import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import OrderhistoryBox from "../components/OrderhistoryBox";

function Orderhistory() {
  const historys = [
    {
      id: 4,
      ordername: "Product name",
      price: "NZD$ 30",
      imageUrl: "../images/listeditems_1.jpg",
    },
    {
      id: 5,
      ordername: "Product name",
      price: "NZD$ 30",
      imageUrl: "../images/listeditems_1.jpg",
    },
    {
      id: 6,
      ordername: "Product name",
      price: "NZD$ 30",
      imageUrl: "../images/listeditems_1.jpg",
    },
  ];

  return (
    <div className="wrapper">
      <div className="orderhistoryPage">
        <div className="orderhistoryPage_h3section">
          <h3 className="orderhistoryPage_h3-blue">Your order products</h3>
          <div>
            <UpdateOutlinedIcon fontSize="large" />
          </div>
        </div>

        <div className="orderhistoryPage_list">
          {historys.map((history) => (
            <OrderhistoryBox key={history.id} history={history} />
          ))}
        </div>
      </div>
      <button className="orderhistoryPage_Button">CLEAR ALL HISTORY</button>
    </div>
  );
}

export default Orderhistory;
