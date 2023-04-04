import React from "react";
import { useNavigate } from "react-router-dom";


function BuySell() {
  const navigate = useNavigate();





  return (
    <div className="BuySell">
      <div className="buysell__buyitems">
        <button className="buysell__buyitems__button" onClick={() => { navigate("/browseitems") }} >
          <h3>Browse items</h3>
        </button>
      </div>

      <div className="buysell__sellitems">
        <button className="buysell__sellitems__button" onClick={() => { navigate("/sellingitems") }} >
          <h3>Selling items</h3>
        </button>
      </div>
    </div>
  );
}

export default BuySell;
