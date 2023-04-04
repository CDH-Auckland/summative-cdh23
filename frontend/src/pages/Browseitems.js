import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';


import Header from "../components/Header"
import Statusmenu from '../components/Statusmenu';
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import Categoryicon from '../components/Categoryicon';
import Typeicon from '../components/Typeicon';

function Browseitems() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [type, setType] = useState("all");
    const [cartCount, setCartCount] = useState(3);

    const backNavigation = () => {
        navigate("/buyandsell");
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

                <div >

                </div>


            </div>
        </div>
    )
}

export default Browseitems