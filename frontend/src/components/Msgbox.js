import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function popup__container({ id, content, listitemClickEvent }) {
  const handleEdit = () => {
    console.log(`Editing product ${id}`);
    listitemClickEvent(id);
  };

  const Msgbox = () => {
    return (
      <div className="popup__container">
        <ShoppingCartIcon sx={{ fontSize: 140 }}> </ShoppingCartIcon>
        <div className="popup__content">
          <h2>{content}</h2>
        </div>
        <button className="popup__btn" onClick={handleEdit}>
          Close
        </button>
      </div>
    );
  };

  return <Msgbox />;
}

export default popup__container;
