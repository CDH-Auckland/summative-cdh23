import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header"
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import OrderhistoryBox from "../components/OrderhistoryBox";

function Orderhistory() {
  const navigate = useNavigate();
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
  const backNavigation = () => {
    navigate("/buyandsell");
  }

  const handleStatus = (history) => {
    console.log(`Clear all ${history.id}'s history`);
  };
  const orderboxDelete = (e) => {
    console.log(e);
  };

  return (
    <div className="wrapper">
      <Header title={"Order history"} backNavigation={backNavigation} />
      <div className="wrapper__sub">
        <div className="orderhistoryPage">
          <div className="orderhistoryPage_h3section">
            <h3 className="orderhistoryPage_h3-blue">Your order products</h3>
            <div>
              <UpdateOutlinedIcon fontSize="large" />
            </div>
          </div>

          <div className="orderhistoryPage_list">
            {historys.map((history) => (
              <OrderhistoryBox
                key={history.id}
                history={history}
                onDelete={orderboxDelete}
              />
            ))}
          </div>
        </div>
        <button className="orderhistoryPage_Button" onClick={handleStatus}>
          CLEAR ALL HISTORY
        </button>
      </div>
    </div>
  );
}

export default Orderhistory;
