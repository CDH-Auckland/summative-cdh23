import React from "react";

function BuySell() {
  return (
    <div className="BuySell">
      <div className="buysell__buyitems">
        <button className="buysell__buyitems__button" type="submit">
          <h6>Browse items</h6>
        </button>
      </div>

      <div className="buysell__sellitems">
        <button className="buysell__sellitems__button" type="submit">
          <h6>Selling items</h6>
        </button>
      </div>
    </div>
  );
}

export default BuySell;
