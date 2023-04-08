import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

import Header from "../components/Header"
import Statusmenu from '../components/Statusmenu';

function Viewitem() {
    const navigate = useNavigate();
    const location = useLocation();

    const user_id = location.state.user_id;
    const [product_id, setProduct_id] = useState(location.state.item_id);
    const [wistlistStatus, SetWishlistStatus] = useState(location.state.wishlistStatus);
    console.log(product_id);
    const [cartCount, setCartCount] = useState(3);
    const [productDetails, setProductDetails] = useState("");

    const [wishlistToken, setWishlistToken] = useState(false);
    const [addCartToken, setAddCartToken] = useState(false);


    useEffect(() => {

        // get all product API using product_id
        //Server search selected product with product_id & stock =="A" if Not fount msg back"Item sold" else send back product details
        //Also collect seller name using user_id from product details
        const getProductDetails = async () => {
            // get product_id, name, price,description, img_url1, img_url2, img_url3, img_url4, seller_name
            setProductDetails({
                product_id: product_id, name: "DIT Drone Kit", price: "340", description: "This is a kit for school kids(8+), contains all the information"
                , seller_name: "Alex", img_url1: "", img_url2: "", img_url3: "", img_url4: ""
            });
            console.log("Item detail retrieved");
        }


        //  wishlist create API using user_id & product_id 
        //First server will Search wishlist using user_id & product_id if fount msg back"Item all ready in wishlist" else Create new wishlist
        const addWishlist = async () => {
            console.log(wistlistStatus);
            console.log("Item added to your Wish");
        }

        // wishlist deleted API using user_id & product_id
        //First server will Search wishlist using user_id & product_id if Not fount msg back"Item not in the wishlist" else Delete the wishlist
        const removeWishlist = async () => {

            console.log(wistlistStatus)
            console.log("Item removed from your Wish");
        }


        // Add item to cart using user_id & product_id
        // First server will check the product stock using product_id if stock =="S" msg back "Item Sold Cannot add to cart"
        // else check cart list avalible using product_id & user_id if found msg back "Item all read added to cart"
        // else Create new cart list using product_id & user_id
        const addToCart = () => {
            console.log("Item added to the cart")
            setAddCartToken(false);
        }



        //All API function calls

        if (!productDetails) {
            getProductDetails();
        }

        if (wishlistToken && wistlistStatus) {
            console.log(wistlistStatus.status);
            if (wistlistStatus.status) {
                addWishlist();

            } else {
                removeWishlist();

            }
            setWishlistToken(false);
        }

        if (addCartToken) {
            addToCart();
        }

    }, [product_id, wistlistStatus, addCartToken]);


    const addToCartHandler = () => {
        setAddCartToken(true);
    }
    const backNavHandler = () => {
        navigate(-1);
    }
    const hamburgerClick = (e) => {
        console.log(e);
    }
    const backNavigation = () => {

    }


    return (
        <div className='wrapper'>
            <Header title={"View Items"} backNavigation={backNavigation} />
            <div className='wrapper__sub'>
                <Statusmenu username={"John"} hamburgerClick={hamburgerClick} cartCount={cartCount} />
                <div>
                    <img src='' alt='' />
                </div>
                <div>
                    <h5>{productDetails.product_id}</h5>
                    <div>
                        <span>${productDetails.price}</span>
                        <h5>{productDetails.seller_name}</h5>
                    </div>
                </div>
                <div>
                    <span>{productDetails.name}</span>
                </div>
                <div>
                    <span>{productDetails.description}</span>
                </div>

                <button className='button' onClick={addToCartHandler}>ADD TO CART</button>
                <button className='button button--invert' onClick={backNavHandler}>CANCEL</button>
            </div>
        </div>
    )
}

export default Viewitem