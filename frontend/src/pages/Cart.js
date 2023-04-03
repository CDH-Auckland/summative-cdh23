import React from 'react'
import { useNavigate } from "react-router-dom";

import Header from "../components/Header"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Cart() {
    const navigate = useNavigate();

    const backNavigation = () => {
        navigate("/buyandsell");
    }

    return (
        <div className="wrapper">
            <Header title={"Cart"} backNavigation={backNavigation} />
            <div className="wrapper__sub">
                <div className='cart_titleblock paddingtop__small'>
                    <h3>Product added to your cart </h3>
                    <div className='cart__titleblock__icon'>
                        <ShoppingCartOutlinedIcon />
                    </div>
                </div>
                {/* Create you div here */}


            </div>
        </div>
    )
}

export default Cart