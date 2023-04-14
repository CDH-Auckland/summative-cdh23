import React from "react";
import { useState } from 'react';

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";



function Msgbox({ view, page, msg }) {

  const [hide, setHide] = useState(view);
  console.log("inside msg box", hide);

  const handleEdit = () => {
    setHide(false);
  };

  return (
    <div className={hide ? "popup_bg" : "popup_bg hide"}>
      <div className={hide ? "popup__container" : "popup__container hide"}>
        <ShoppingCartIcon sx={{ fontSize: 85 }}> </ShoppingCartIcon>
        <div className="popup__content">
          <h4>{msg}</h4>
        </div>
        <button className="popup__btn" onClick={handleEdit}>
          Close
        </button>
      </div>
    </div>

  );

}

export default Msgbox