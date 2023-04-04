import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import Header from "../components/Header"
import Statusmenu from '../components/Statusmenu';
import ProductBlock from "../components/ProductBlock";
import img from "../images/Sampleimage.jpg";
import AssignmentIcon from "@mui/icons-material/Assignment";

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

  const removeWishlistCallback = (e) => {
    console.log(e);
  };

  return (
    <div className="wrapper">
      <Header title={"Wishlist"} backNavigation={backNavigation} />
      <div className="wrapper__sub">
        <Statusmenu username={"John"} hamburgerClick={hamburgerClick} cartCount={cartCount} />
        <div className="wishlist__title">
          <h3>Your Wishlist here</h3>
          <div className="product__icon__top">
            <AssignmentIcon fontSize="large" />

            {/* <NotificationsIcon fontSize="large" />
            <ShoppingCartIcon fontSize="large" />
            <ViewHeadlineIcon fontSize="large" /> */}
          </div>
        </div>

        <div className="Wishlist__items">
          <ProductBlock
            key={"001"}
            id={"001"}
            name={"test"}
            price={78}
            //   img={"./img"}
            img={img}
            removeWishlistCallback={removeWishlistCallback}
          />

          <ProductBlock
            key={"002"}
            id={"002"}
            name={"test2"}
            price={79}
            //   img={"./img"}
            img={img}
            removeWishlistCallback={removeWishlistCallback}
          />

          <ProductBlock
            key={"003"}
            id={"003"}
            name={"test3"}
            price={80}
            //   img={"./img"}
            img={img}
            removeWishlistCallback={removeWishlistCallback}
          />

          <ProductBlock
            key={"004"}
            id={"004"}
            name={"test4"}
            price={81}
            //   img={"./img"}
            img={img}
            removeWishlistCallback={removeWishlistCallback}
          />

          <ProductBlock
            key={"005"}
            id={"005"}
            name={"test5"}
            price={82}
            //   img={"./img"}
            img={img}
            removeWishlistCallback={removeWishlistCallback}
          />

          <ProductBlock
            key={"006"}
            id={"006"}
            name={"test6"}
            price={83}
            //   img={"./img"}
            img={img}
            removeWishlistCallback={removeWishlistCallback}
          />

          <ProductBlock
            key={"007"}
            id={"007"}
            name={"test7"}
            price={84}
            //   img={"./img"}
            img={img}
            removeWishlistCallback={removeWishlistCallback}
          />

          <ProductBlock
            key={"008"}
            id={"008"}
            name={"test8"}
            price={84}
            //   img={"./img"}
            img={img}
            removeWishlistCallback={removeWishlistCallback}
          />
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
