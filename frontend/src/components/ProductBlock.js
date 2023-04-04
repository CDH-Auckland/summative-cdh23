/* Wishlist   END*/
import React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";

function ProductBlock(props) {
  const removeWishHendler = (e) => {
    props.removeWishlistCallback(props.id);
  };

  return (
    <div className="product__container">
      <img className="product__image" src={props.img} alt="Product" />
      <div className="product__info">
        <h2 className="product__name">{props.name}</h2>
        <h3 className="product__price">{props.price}</h3>
        <div className="product__icon">
          <div onClick={removeWishHendler}>
            <AssignmentIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBlock;
