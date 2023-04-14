import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import img_not from "../images/img_not.png";

import Header from "../components/Header";
import Statusmenu from "../components/Statusmenu";

import Comment from "../components/Comment";
import CommentsCreate from "../components/CommentsCreate";

function Viewitem() {
  const navigate = useNavigate();
  const [user_id, setUser_id] = useState();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      setUser_id(user._id);
      console.log(user_id);
    } else {
      navigate("/");
    }
  }, []);

  console.log("testing user inf", user_id);

  const location = useLocation();

  const [product_id, setProduct_id] = useState(location.state.item_id);
  const [wistlistStatus, SetWishlistStatus] = useState(
    location.state.wishlistStatus
  );

  const [cartCount, setCartCount] = useState(0);
  const [productDetails, setProductDetails] = useState("");
  const [slides, setSlides] = useState([]);

  const [wishlistToken, setWishlistToken] = useState(false);
  const [addCartToken, setAddCartToken] = useState(false);

  const [msg, setMsg] = useState(null);
  const [isLOading, setIsLoading] = useState(null);
  const [errorMsgState, setErrorMsgState] = useState(false);
  const [msgState, setMsgState] = useState(false);

  const getProductDetails = async () => {
    const requestOptions = {
      method: "GET",
      // body: JSON.stringify({ category: category, type: type }),
      // headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch(
      `http://localhost:4000/api/items/${product_id}`,
      requestOptions
    );
    const json = await response.json();
    console.log(json);
    setProductDetails(json);
    setSlides([
      { url: json.ReactimgUrl1 },
      { url: json.imgUrl2 },
      { url: json.imgUrl3 },
      { url: json.imgUrl4 },
    ]);
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
    // get product_id, name, price,description, img_url1, img_url2, img_url3, img_url4, seller_name
    console.log("Item detail retrieved");
  };
  useEffect(() => {
    // get all product API using product_id
    //Server search selected product with product_id & stock =="A" if Not fount msg back"Item sold" else send back product details
    //Also collect seller name using user_id from product details

    // Add item to cart using user_id & product_id
    // First server will check the product stock using product_id if stock =="S" msg back "Item Sold Cannot add to cart"
    // else check cart list avalible using product_id & user_id if found msg back "Item all read added to cart"
    // else Create new cart list using product_id & user_id
    const addToCart = () => {
      console.log("Item added to the cart");
      setAddCartToken(false);
    };

    //All API function calls

    if (!productDetails) {
      getProductDetails();
    }

    if (addCartToken) {
      addToCart();
    }
  }, [product_id, wistlistStatus, addCartToken]);

  const addToCartHandler = () => {
    setCartCount(2);
    setAddCartToken(true);
  };
  const backNavHandler = () => {
    navigate(-1);
  };
  const hamburgerClick = (e) => {
    console.log(e);
  };
  const backNavigation = () => {};

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      src={`http://localhost:4000/items-image/${productDetails.imgUrl1}`}
      alt=""
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src={`http://localhost:4000/items-image/${productDetails.imgUrl2}`}
      alt=""
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src={`http://localhost:4000/items-image/${productDetails.imgUrl3}`}
      alt=""
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      src={`http://localhost:4000/items-image/${productDetails.imgUrl4}`}
      alt=""
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];

  const refreshComments = () => {
    getProductDetails();
  };
  return (
    <div className="wrapper">
      <Header title={"View Items"} backNavigation={backNavigation} />
      <div className="wrapper__sub">
        <Statusmenu
          username={"John"}
          hamburgerClick={hamburgerClick}
          cartCount={cartCount}
        />
        <div className="viewItem__imagewrapper">
          {console.log(productDetails)}
          {console.log(slides)}
          <AliceCarousel mouseTracking items={items} />
          {/* <img src={`http://localhost:4000/items-image/${productDetails.imgUrl1}`} alt={productDetails.name} />
                    <img src={`http://localhost:4000/items-image/${productDetails.imgUrl2}`} alt={productDetails.name} />
                    <img src={`http://localhost:4000/items-image/${productDetails.imgUrl3}`} alt={productDetails.name} /> */}
        </div>
        <div className="viewItem__pricenamediv">
          <span>NZD${productDetails.price}</span>
          <h5>{productDetails.seller_name}</h5>
        </div>
        <div className="viewItem__namediv">
          <h3>{productDetails.name}</h3>
        </div>
        <div className="viewItem__descdiv">
          <h3>{productDetails.description}</h3>
        </div>
        <div>
          <button className="button " onClick={addToCartHandler}>
            ADD TO CART
          </button>
          <button className="button button--invert" onClick={backNavHandler}>
            CANCEL
          </button>

          <CommentsCreate
            product_id={product_id}
            refreshComments={refreshComments}
          />
        </div>
      </div>
    </div>
  );
}

export default Viewitem;
