import React from "react";
import { useState } from 'react';

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";



function Msgbox({ view, page, msg }) {

  const [hide, setHide] = useState(!view);

  const handleEdit = () => {
    setHide(true);
  };

  return (
    <div className={hide ? "popup_bg hide" : "popup_bg"}>
      <div className={hide ? "popup__container hide" : "popup__container"}>
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