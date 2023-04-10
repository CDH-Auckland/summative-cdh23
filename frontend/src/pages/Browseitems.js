import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';


import Header from "../components/Header"
import Statusmenu from '../components/Statusmenu';

import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import Categoryicon from '../components/Categoryicon';
import Typeicon from '../components/Typeicon';
import ProductThumbnail from "../components/ProductThumbnail";

import img from "../images/Sampleimage.jpg";
import img1 from "../images/item_001.jpg";

function Browseitems() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [type, setType] = useState("all");
    const [cartCount, setCartCount] = useState(3);

    const [wistlistStatus, SetWishlistStatus] = useState("");
    const [wistlistArry, setWishlistArray] = useState("");
    const [productArray, setProductArray] = useState("");

    const [wishlistToken, setWishlistToken] = useState(false);

    const user_id = "00034rf";

    useEffect(() => {



        // get all product API  
        //Server search all products with stock == "A" and return the productArray
        const getAllProduct = async () => {

            // get product_id, name, price, category, type, img_utl1
            setProductArray();
            console.log("Product deatls retrieved");
        }

        //get all wishlist API using user_id
        const getAllWishlist = async () => {
            //search wishlist using user_id
            setWishlistArray();
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



        //All API function calls

        if (wishlistToken && wistlistStatus) {
            console.log(wistlistStatus.status);
            if (wistlistStatus.status) {
                addWishlist();

            } else {
                removeWishlist();

            }
            setWishlistToken(false);
        }

        if (!productArray) {
            getAllProduct();
        }

    }, [wistlistStatus, wishlistToken]);

    const backNavigation = () => {
        // navigate("/buyandsell");
    }

    const categoryiconclick = (e) => {
        setCategory(e);
        console.log(e);
    }
    const typeiconclick = (e) => {
        setType(e);
        console.log(e);
    }

    const hamburgerClick = (e) => {
        console.log(e);
    }

    const wishlistCallback = (item_id, wishliststatus) => {
        console.log(item_id, wishliststatus);
        SetWishlistStatus(inputs => ({
            ...inputs,
            "user_id": user_id,
            "product_id": item_id,
            status: wishliststatus,
        }));
        setWishlistToken(true);
    };

    const viewDetailsCallback = (item_id, wishlistStatus) => {
        console.log(item_id, wishlistStatus);
        navigate("/viewitem", { state: { user_id: user_id, item_id: item_id, wishlistStatus: wishlistStatus } });
    }

    const testclick = () => {

    }

    return (
        <div className="wrapper">
            <Header title={"Browse Items"} backNavigation={backNavigation} />
            <div className="wrapper__sub">
                <Statusmenu username={"John"} hamburgerClick={hamburgerClick} cartCount={cartCount} />

                <div className='browseitems_titleblock paddingtop__small'>
                    <h3>Category</h3>
                    <div className='cart__titleblock__icon'>
                        <BallotOutlinedIcon />
                    </div>
                </div>
                <div className='browseitems_categoryblock paddingtop__small'>

                    <Categoryicon key={"category1"} name={"category1"} selected={category} categoryiconclick={categoryiconclick} />
                    <Categoryicon key={"category2"} name={"category2"} selected={category} categoryiconclick={categoryiconclick} />
                    <Categoryicon key={"category3"} name={"category3"} selected={category} categoryiconclick={categoryiconclick} />
                    <Categoryicon key={"category4"} name={"category4"} selected={category} categoryiconclick={categoryiconclick} />
                    <Categoryicon key={"category5"} name={"category5"} selected={category} categoryiconclick={categoryiconclick} />
                    <Categoryicon key={"category6"} name={"category6"} selected={category} categoryiconclick={categoryiconclick} />
                    <Categoryicon key={"category7"} name={"category7"} selected={category} categoryiconclick={categoryiconclick} />
                    <Categoryicon key={"category8"} name={"category8"} selected={category} categoryiconclick={categoryiconclick} />

                </div>
                <div className='browseitems_titleblock paddingtop__small'>
                    <h3>Type</h3>
                </div>
                <div className='browseitems_typeblock paddingtop__small'>
                    <Typeicon key={"type1"} name={"DIY Kit"} img_url={"DIY-KIt"} selected={type} typeiconclick={typeiconclick} />
                    <Typeicon key={"type2"} name={"Ready To Use"} img_url={"readyToUse"} selected={type} typeiconclick={typeiconclick} />
                    <Typeicon key={"type3"} name={"Download"} img_url={"download"} selected={type} typeiconclick={typeiconclick} />
                </div>
                <div className='browseitems_titleblock paddingtop__small'>
                    <h3>List Items</h3>
                </div>

                < div className="browseitem__items">
                    <ProductThumbnail
                        key={"001"}
                        id={"001"}
                        name={"test"}
                        price={78}
                        wishlistStatus={true}
                        //   img={"./img"}
                        img={img1}
                        wishlistCallback={wishlistCallback}
                        viewDetailsCallback={viewDetailsCallback}
                    />
                    <ProductThumbnail
                        key={"0012"}
                        id={"0013"}
                        name={"test"}
                        price={45}
                        wishlistStatus={false}
                        //   img={"./img"}
                        img={img1}
                        wishlistCallback={wishlistCallback}
                        viewDetailsCallback={viewDetailsCallback}
                    />
                    <ProductThumbnail
                        key={"045"}
                        id={"0045"}
                        name={"test"}
                        price={120}
                        wishlistStatus={true}
                        //   img={"./img"}
                        img={img1}
                        wishlistCallback={wishlistCallback}
                        viewDetailsCallback={viewDetailsCallback}
                    />
                </div>
                <button className='button' onClick={testclick}>test</button>

            </div>
        </div>
    )
}

export default Browseitems