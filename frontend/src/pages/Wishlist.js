import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import AssignmentIcon from "@mui/icons-material/Assignment";

import Header from "../components/Header";
import Msgbox from "../components/Msgbox";

import Statusmenu from '../components/Statusmenu';
import ProductThumbnail from "../components/ProductThumbnail";

import img from "../images/Sampleimage.jpg";
import img1 from "../images/item_001.jpg";



// import NotificationsIcon from "@mui/icons-material/Notifications";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

function Wishlist() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(JSON.parse(localStorage.getItem('user')));

  const user_id = "00034rf";

  const [cartCount, setCartCount] = useState(3);
  const [wistlistStatus, SetWishlistStatus] = useState("");
  const [wishListArray, setWishListArray] = useState([]);
  const [wislidtId, setWislidtId] = useState("");
  const [productId, setProductId] = useState("");
  const [wishlistToken, setWishlistToken] = useState(false);
  const [fetchItems, setFetchItems] = useState(true);

  const [msg, setMsg] = useState(null);
  const [isLOading, setIsLoading] = useState(null);
  const [errorMsgState, setErrorMsgState] = useState(false);
  const [msgState, setMsgState] = useState(false);


  useEffect(() => {
    // get all wishlist
    const getAllWishlist = async () => {
      const requestOptions = {
        method: 'GET',
        // body: JSON.stringify({ category: category, type: type }),
        // headers: { 'Content-Type': 'application/json' }
      }
      const response = await fetch(`http://localhost:4000/api/wishlist/${user_id}`, requestOptions)
      const json = await response.json();
      console.log(json);

      if (!response.ok) {
        setMsg(json.error);
        setErrorMsgState(true);
        setMsgState(false);
        setIsLoading(false);
        setFetchItems(false);
      } else {
        if (json.msg) {
          setMsg(json.msg);
          setMsgState(true);
        } else {
          setWishListArray(json);
          setMsg("");
          setMsgState(false);
        }
        setErrorMsgState(false);
        setIsLoading(false);
        setFetchItems(false);
      }
    }
    if (fetchItems) {
      getAllWishlist();

    }

  }, []);

  useEffect(() => {

    //  wishlist remove API
    const removeWishlist = async () => {
      console.log("inside remove ftech ");

      const requestOptions = {
        method: 'DELETE',
        // body: JSON.stringify({ user_id: user_id, product_id: wislidtId }),
        // headers: { 'Content-Type': 'application/json' }
      }
      const response = await fetch(`http://localhost:4000/api/wishlist/${user_id}/${wislidtId}`, requestOptions)
      const json = await response.json();
      console.log(json);
      if (!response.ok) {
        setMsg(json.error);
        setErrorMsgState(true);
        setIsLoading(false);
        setMsgState(false);
      } else {
        setMsg(json.msg);
        setMsgState(true);
        setIsLoading(false);
        setErrorMsgState(false);
      }
      setFetchItems(true);
      setWislidtId("");
      setWishlistToken(false);
      setFetchItems(true);
    }

    if (wishlistToken) {
      removeWishlist();
    }

  }, [wishlistToken]);


  const backNavigation = () => {
    // navigate("/browseitems");
  }
  const hamburgerClick = (e) => {
    console.log(e);
  }

  const wishlistCallback = (item_id, wishlist_id) => {
    console.log("product_id", item_id);
    setProductId(item_id)
    setWislidtId(wishlist_id);
    setWishlistToken(true);
  }


  const viewDetailsCallback = (item_id) => {
    console.log(item_id);
  }

  // Items components
  var itemElements = '';
  if (wishListArray === undefined) {
    itemElements = () => {
      return <div> No items</div>
    }
  } else {
    itemElements = wishListArray.map((items, index) => {
      return <ProductThumbnail
        key={items.product_id}
        id={items.product_id}
        wishlist_id={items._id}
        name={items.name}
        price={items.price}
        wishlistStatus={true}
        //   img={"./img"}
        img={items.imgUrl1}
        wishlistCallback={wishlistCallback}
        viewDetailsCallback={viewDetailsCallback}
      />
    });


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
        {msgState && <div className="msg">{msg}</div>}
        {errorMsgState && <div className="error">{msg}</div>}
        <div className="Wishlist__items">

          {itemElements}
        </div>
      </div>
    </div>
  );
}



export default Wishlist

