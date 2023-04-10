import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import DropdownMenu from '../components/DropdownMenu';


import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function Statusmenu(props) {
    const [menuopen, setMenuopen] = useState(false);
    const navigate = useNavigate();


    const hamburgerClickHandler = () => {
        props.hamburgerClick(menuopen);
        setMenuopen(!menuopen);
    }

    const viewCartHandler = () => {
        navigate("/cart");
    }



    return (
        <div className='statusMenu'>
            <DropdownMenu menuopen={menuopen} />
            <span>Welcome {props.username}</span>
            <div className='statusMenu__shoppingcart' onClick={viewCartHandler}>
                <ShoppingCartOutlinedIcon fontSize='large' />
                <div className='statusMenu__carcount'>
                    <span>{props.cartCount}</span>
                </div>
            </div>
            <div className='statusMenu__hamburger' onClick={hamburgerClickHandler}>
                {!menuopen ? <MenuIcon fontSize='large' /> : < MenuOpenIcon fontSize='large' />}

            </div>
        </div>
    )
}

export default Statusmenu