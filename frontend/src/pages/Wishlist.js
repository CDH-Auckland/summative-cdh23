import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import AssignmentIcon from "@mui/icons-material/Assignment";

import Header from "../components/Header"
import Statusmenu from '../components/Statusmenu';
import ProductThumbnail from "../components/ProductThumbnail";

import img from "../images/Sampleimage.jpg";
import img1 from "../images/item_001.jpg";


// import NotificationsIcon from "@mui/icons-material/Notifications";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

function Wishlist() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(3);

  const backNavigation = () => {
    navigate("/browseitems");
  }
  const hamburgerClick = (e) => {
    console.log(e);
  }

  const removeWishlistCallback = (item_id, wishliststatus) => {
    console.log(item_id, wishliststatus);
  };

  const viewDetailsCallback = (item_id) => {
    console.log(item_id);
  }

  return (
    <div className="wrapper">
      <Header title={"Wishlist"} backNavigation={backNavigation} />
      <div className="wrapper__sub">
        <Statusmenu username={"John"} hamburgerClick={hamburgerClick} cartCount={cartCount} />
        <div className="wishlist__title">
          <h3>Your Wishlist here</h3>
          <div className="wishlist__titleblock__icon">
            <AssignmentIcon fontSize="large" />
          </div>
        </div>

        <div className="Wishlist__items">

          <ProductThumbnail
            key={"001"}
            id={"001"}
            name={"test"}
            price={78}
            //   img={"./img"}
            img={img1}
            removeWishlistCallback={removeWishlistCallback}
            viewDetailsCallback={viewDetailsCallback}
          />
          <ProductThumbnail
            key={"002"}
            id={"002"}
            name={"test"}
            price={78}
            //   img={"./img"}
            img={img}
            removeWishlistCallback={removeWishlistCallback}
            viewDetailsCallback={viewDetailsCallback}
          />
          <ProductThumbnail
            key={"003"}
            id={"003"}
            name={"test"}
            price={78}
            //   img={"./img"}
            img={img}
            removeWishlistCallback={removeWishlistCallback}
            viewDetailsCallback={viewDetailsCallback}
          />
          <ProductThumbnail
            key={"004"}
            id={"004"}
            name={"test"}
            price={78}
            //   img={"./img"}
            img={img}
            removeWishlistCallback={removeWishlistCallback}
            viewDetailsCallback={viewDetailsCallback}
          />
          <ProductThumbnail
            key={"005"}
            id={"005"}
            name={"test"}
            price={78}
            //   img={"./img"}
            img={img}
            removeWishlistCallback={removeWishlistCallback}
            viewDetailsCallback={viewDetailsCallback}
          />
          <ProductThumbnail
            key={"006"}
            id={"006"}
            name={"test"}
            price={78}
            //   img={"./img"}
            img={img}
            removeWishlistCallback={removeWishlistCallback}
            viewDetailsCallback={viewDetailsCallback}
          />
          <ProductThumbnail
            key={"007"}
            id={"007"}
            name={"test"}
            price={78}
            //   img={"./img"}
            img={img}
            removeWishlistCallback={removeWishlistCallback}
            viewDetailsCallback={viewDetailsCallback}
          />
          <ProductThumbnail
            key={"008"}
            id={"008"}
            name={"test"}
            price={78}
            //   img={"./img"}
            img={img}
            removeWishlistCallback={removeWishlistCallback}
            viewDetailsCallback={viewDetailsCallback}
          />
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
