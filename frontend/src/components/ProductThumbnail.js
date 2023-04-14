import React from "react";
import { useState, useEffect } from 'react';

import img_not from "../images/img_not.png"


import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

function ProductThumbnail(props) {
  const [wishlist, setWishlist] = useState(props.wishlistStatus);

  const wishHandler = (e) => {
    setWishlist(!wishlist);
    props.wishlistCallback(props.id, props.wishlist_id);
  };

  const viewDetailHandler = () => {
    props.viewDetailsCallback(props.id, wishlist);
  }

  return (
    <div className="productThumbnail__container">
      <div className="productThumbnail__imageblock" onClick={viewDetailHandler}>
        {props.img ? (
          <img className="productThumbnail__image" src={`http://localhost:4000/items-image/${props.img}`} alt="Product" />
        ) : (
          <img src={img_not} alt={props.name} />
        )}


      </div>
      <div className="productThumbnail__info">
        <div className="productThumbnail__infoleft">
          <h2 className="productThumbnail__name">{props.name}</h2>
          <h3 className="productThumbnail__price">{props.price}</h3>
        </div>
        <div className="productThumbnail__icon">
          <div onClick={wishHandler}>
            <AssignmentIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductThumbnail;
