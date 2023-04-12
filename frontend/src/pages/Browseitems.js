import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';


import Header from "../components/Header"
import Statusmenu from '../components/Statusmenu';

import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import Categoryicon from '../components/Categoryicon';
import Typeicon from '../components/Typeicon';
import ProductThumbnail from "../components/ProductThumbnail";


function Browseitems() {
    const navigate = useNavigate();

    const [msg, setMsg] = useState("");
    const [isLOading, setIsLoading] = useState(null);
    const [errorMsgState, setErrorMsgState] = useState(false);
    const [msgState, setMsgState] = useState(false);

    const [category, setCategory] = useState("all");
    const [type, setType] = useState("all");
    const [cartCount, setCartCount] = useState(3);

    const [wislidtId, setWislidtId] = useState("");
    const [productArray, setProductArray] = useState([]);
    const [fetchItems, setFetchItems] = useState(true);

    const [wishlistToken, setWishlistToken] = useState(false);


    const user_id = "00034rf";

    useEffect(() => {

        // get all product API  
        //Server search all products with stock == "A" and return the productArray
        const getAllProduct = async () => {

            const requestOptions = {
                method: 'GET',
                // body: JSON.stringify({ category: category, type: type }),
                // headers: { 'Content-Type': 'application/json' }
            }
            const response = await fetch(`http://localhost:4000/api/items/${category}/${type}`, requestOptions)
            const json = await response.json();
            console.log(json);
            setProductArray(json);
            if (!response.ok) {
                setMsg(json.error);
                setErrorMsgState(true);
                setMsgState(false);
                setIsLoading(false);
                setFetchItems(false);
            } else {
                setMsg(json.msg);
                setMsgState(true);
                setErrorMsgState(false);
                setIsLoading(false);
                setFetchItems(false);
            }
        }


        //  wishlist create API using user_id & product_id 
        //First server will Search wishlist using user_id & product_id if fount msg back"Item all ready in wishlist" else Create new wishlist
        const addWishlist = async () => {
            const requestOptions = {
                method: 'PUT',
                body: JSON.stringify({ user_id: user_id, product_id: wislidtId }),
                headers: { 'Content-Type': 'application/json' }
            }
            const response = await fetch('http://localhost:4000/api/wishlist/', requestOptions)
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
            setWislidtId("");
            setWishlistToken(false);
        }





        //All API function calls

        if (wishlistToken && wislidtId) {
            addWishlist();
        }

        if (fetchItems) {
            getAllProduct();
        }

    }, [wislidtId, wishlistToken]);

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
        setWislidtId(item_id);
        setWishlistToken(true);
    };

    const viewDetailsCallback = (item_id, wishlistStatus) => {
        console.log(item_id, wishlistStatus);
        navigate("/viewitem", { state: { user_id: user_id, item_id: item_id, wishlistStatus: wishlistStatus } });
    }

    const testclick = () => {

    }

    // Items components
    var itemElements = '';
    if (productArray === undefined) {
        itemElements = () => {
            return <div> No items</div>
        }
    } else {
        itemElements = productArray.map((items, index) => {
            return <ProductThumbnail
                key={index}
                id={items._id}
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
                {msgState && <div className="msg">{msg}</div>}
                {errorMsgState && <div className="error">{msg}</div>}
                <div className='browseitems_titleblock paddingtop__small'>
                    <h3>List Items</h3>
                </div>
                < div className="browseitem__items">
                    {itemElements}
                </div>

                <button className='button' onClick={testclick}>test</button>

            </div>
        </div>
    )
}

export default Browseitems