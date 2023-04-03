import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';


import Header from "../components/Header"
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import Categoryicon from '../components/Categoryicon';
import Typeicon from '../components/Typeicon';

function Browseitems() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [type, setType] = useState("all");

    const backNavigation = () => {
        navigate("/buyandsell");
    }

    const categoryiconclick = (e) => {
        setCategory(e);
    }
    const typeiconclick = (e) => {
        setType(e);
    }


    return (
        <div className="wrapper">
            <Header title={"Browse Items"} backNavigation={backNavigation} />
            <div className="wrapper__sub">
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
                    <Typeicon key={"type1"} name={"type1"} selected={type} typeiconclick={typeiconclick} />
                    <Typeicon key={"type2"} name={"type2"} selected={type} typeiconclick={typeiconclick} />
                    <Typeicon key={"type3"} name={"type3"} selected={type} typeiconclick={typeiconclick} />
                    <Typeicon key={"type4"} name={"type4"} selected={type} typeiconclick={typeiconclick} />
                </div>
                {/* Create you div here */}


            </div>
        </div>
    )
}

export default Browseitems