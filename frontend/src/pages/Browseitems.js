import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import ConfirmNotification from '../components/ConfirmNotification';
import Header from "../components/Header"
import Statusmenu from '../components/Statusmenu';

import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import Categoryicon from '../components/Categoryicon';
import Typeicon from '../components/Typeicon';
import ProductThumbnail from "../components/ProductThumbnail";


function Browseitems() {
    const navigate = useNavigate();
    const [user_id, setUser_id] = useState();


    useEffect(() => {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user'));
            setUser_id(user._id);
            console.log(user_id);
        } else {
            navigate("/")
        }
        console.log("testing user inf", user_id)
    }, []);




    const [msg, setMsg] = useState("");
    const [dilogeOpen, setDilogeOpen] = useState(false);
    const [isLOading, setIsLoading] = useState(null);
    const [errorMsgState, setErrorMsgState] = useState(false);


    const [category, setCategory] = useState("all");
    const [type, setType] = useState("all");
    const [cartCount, setCartCount] = useState(3);

    const [wislidtId, setWislidtId] = useState("");
    const [productArray, setProductArray] = useState(null);
    const [fetchItems, setFetchItems] = useState(true);

    const [wishlistToken, setWishlistToken] = useState(false);



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
                setDilogeOpen(true);
                setErrorMsgState(true);
                setIsLoading(false);
                setFetchItems(false);
            } else {
                setMsg(json.msg);
                setDilogeOpen(false);
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
            console.log("Add to wishlist json replay:", json);
            if (!response.ok) {
                setMsg(json.error);
                setDilogeOpen(true);
                setErrorMsgState(true);
                setIsLoading(false);
            } else {
                setMsg(json.msg);
                setDilogeOpen(true);
                setErrorMsgState(false);
                setIsLoading(false);
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

    }, [fetchItems, wislidtId, wishlistToken]);

    const backNavigation = () => {
        // navigate("/buyandsell");
    }

    const categoryiconclick = (e) => {
        setCategory(e);
        console.log(e);
        setFetchItems(true);
    }
    const typeiconclick = (e) => {
        setType(e);
        console.log(e);
        setFetchItems(true);
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

    const dilogCloseHandler = (e) => {
        console.log("Diloge closed")
        setDilogeOpen(false);
    }


    // Items components

    const itemElements = productArray?.map((items, index) => {
        return (
            <ProductThumbnail
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
        );
    });






    return (
        <div className="wrapper">
            <Header title={"Browse Items"} backNavigation={backNavigation} />
            <div className="wrapper__sub">

                <ConfirmNotification openDilog={dilogeOpen} msgError={errorMsgState} msg={msg} dilogCloseHandler={dilogCloseHandler} />

                <Statusmenu username={"John"} hamburgerClick={hamburgerClick} cartCount={cartCount} />

                <div className='browseitems_titleblock paddingtop__small'>
                    <h3>Category</h3>
                    <div className='cart__titleblock__icon'>
                        <BallotOutlinedIcon />
                    </div>
                </div>
                <div className='browseitems_categoryblock paddingtop__small'>

                    <Categoryicon key={"category1"} name={"Category1"} selected={category} categoryiconclick={categoryiconclick} />
                    <Categoryicon key={"category2"} name={"Category2"} selected={category} categoryiconclick={categoryiconclick} />
                    <Categoryicon key={"category3"} name={"Category3"} selected={category} categoryiconclick={categoryiconclick} />
                    <Categoryicon key={"category4"} name={"Category4"} selected={category} categoryiconclick={categoryiconclick} />
                    <Categoryicon key={"category5"} name={"Category5"} selected={category} categoryiconclick={categoryiconclick} />
                    <Categoryicon key={"category6"} name={"Category6"} selected={category} categoryiconclick={categoryiconclick} />
                    <Categoryicon key={"category7"} name={"Category7"} selected={category} categoryiconclick={categoryiconclick} />
                    <Categoryicon key={"category8"} name={"Category8"} selected={category} categoryiconclick={categoryiconclick} />

                </div>
                <div className='browseitems_titleblock paddingtop__small'>
                    <h3>Type</h3>
                </div>
                <div className='browseitems_typeblock paddingtop__small'>
                    <Typeicon key={"type1"} name={"DIY Kit"} img_url={"DIY-KIt"} selected={type} typeiconclick={typeiconclick} />
                    <Typeicon key={"type2"} name={"Ready To Use"} img_url={"readyToUse"} selected={type} typeiconclick={typeiconclick} />
                    <Typeicon key={"type3"} name={"Download"} img_url={"download"} selected={type} typeiconclick={typeiconclick} />
                </div>
                {/* <div className={msgState ? "msg" : "msg hide"}>{msg}</div>
                <div className={errorMsgState ? "error" : "error hide"}>{msg}</div> */}

                <div className='browseitems_titleblock paddingtop__small'>
                    <h3>List Items</h3>
                </div>
                < div className="browseitem__items">
                    {itemElements}
                </div>

            </div>
        </div>
    )
}

export default Browseitems