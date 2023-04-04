import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

import Header from "../components/Header"
import Statusmenu from '../components/Statusmenu';

function Viewitem() {
    const navigate = useNavigate();
    const location = useLocation();

    const [itemTitle, setItemTitle] = useState("Diy Kit");
    const [itemDec, setItemDed] = useState("This is a kit for school kids(8+), contains all the information");
    const [itemPrice, setItemprice] = useState(340);
    const [cartCount, setCartCount] = useState(3);

    console.log(location.state);

    const addToCart = () => {

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
                    <span>${itemPrice}</span>
                </div>
                <div>
                    <span>{itemTitle}</span>
                </div>
                <div>
                    <span>{itemDec}</span>
                </div>
                <button className='button' onClick={addToCart}>ADD TO CART</button>
                <button className='button button--invert' onClick={backNavHandler}>CANCEL</button>
            </div>
        </div>
    )
}

export default Viewitem