import React from "react";
import { useState, useEffect } from 'react';


import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

function ProductThumbnail(props) {
  const [wishlist, setWishlist] = useState(true);

  const removeWishHendler = (e) => {
    setWishlist(!wishlist);
    props.removeWishlistCallback(props.id, wishlist);
  };

  return (
    <div className="productThumbnail__container">
      <div className="productThumbnail__imageblock">
        <img className="productThumbnail__image" src={props.img} alt="Product" />
      </div>
      <div className="productThumbnail__info">
        <div className="productThumbnail__infoleft">
          <h2 className="productThumbnail__name">{props.name}</h2>
          <h3 className="productThumbnail__price">{props.price}</h3>
        </div>
        <div className="productThumbnail__icon">
          <div onClick={removeWishHendler}>
            {wishlist ? <AssignmentIcon fontSize="large" /> : <AssignmentOutlinedIcon fontSize="large" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductThumbnail;
