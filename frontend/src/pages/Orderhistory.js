import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header"
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import OrderhistoryBox from "../components/OrderhistoryBox";

function Orderhistory() {
  const navigate = useNavigate();
  const [historys, setHistory] = useState([
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
  }

  const clearAllHistoryHandler = (e) => {
    console.log(`Clear all order history`);
  };
  const orderboxDelete = (e) => {
    console.log(`Deleting selected orderhistory ${e}`);
  };

  return (
    <div className="wrapper">
      <Header title={"Order history"} backNavigation={backNavigation} />
      <div className="wrapper__sub">
        <div className="orderhistoryPage_h3section">
          <h3 className="orderhistoryPage_h3-blue">Your order products</h3>
          <div>
            <UpdateOutlinedIcon fontSize="large" />
          </div>
        </div>

        <div className="orderhistoryPage_list">
          {historys.map((history) => (
            <OrderhistoryBox
              key={history.item_id}
              history={history}
              onDelete={orderboxDelete}
            />
          ))}
        </div>
        <button className="orderhistoryPage_Button" onClick={clearAllHistoryHandler}>
          CLEAR ALL HISTORY
        </button>
      </div>
    </div>
  );
}

export default Orderhistory;
