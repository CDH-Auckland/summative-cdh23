import React from 'react'
import { useNavigate } from "react-router-dom";

import Header from "../components/Header"
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";

function Browseitems() {
    const navigate = useNavigate();

    const backNavigation = () => {
        navigate("/buyandsell");
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
                    <div className='browseitems_category'>
                        <div className='browseitems_categoryicon'>
                            <BallotOutlinedIcon fontSize='large' />
                        </div>
                        <h5>Category1</h5>
                    </div>
                    <div className='browseitems_category'>
                        <div className='browseitems_categoryicon'>
                            <BallotOutlinedIcon fontSize='large' />
                        </div>
                        <h5>Category2</h5>
                    </div>
                    <div className='browseitems_category'>
                        <div className='browseitems_categoryicon'>
                            <BallotOutlinedIcon fontSize='large' />
                        </div>
                        <h5>Category3</h5>
                    </div>
                    <div className='browseitems_category'>
                        <div className='browseitems_categoryicon'>
                            <BallotOutlinedIcon fontSize='large' />
                        </div>
                        <h5>Category4</h5>
                    </div>
                    <div className='browseitems_category'>
                        <div className='browseitems_categoryicon'>
                            <BallotOutlinedIcon fontSize='large' />
                        </div>
                        <h5>Category5</h5>
                    </div>
                    <div className='browseitems_category'>
                        <div className='browseitems_categoryicon'>
                            <BallotOutlinedIcon fontSize='large' />
                        </div>
                        <h5>Category6</h5>
                    </div>
                    <div className='browseitems_category'>
                        <div className='browseitems_categoryicon'>
                            <BallotOutlinedIcon fontSize='large' />
                        </div>
                        <h5>Category7</h5>
                    </div>
                    <div className='browseitems_category'>
                        <div className='browseitems_categoryicon'>
                            <BallotOutlinedIcon fontSize='large' />
                        </div>
                        <h5>Category8</h5>
                    </div>
                </div>
                <div className='browseitems_titleblock paddingtop__small'>
                    <h3>Type</h3>
                </div>
                <div className='browseitems_typeblock paddingtop__small'>
                    <div className='browseitems_category'>
                        <div className='browseitems_categoryicon'>
                            <BallotOutlinedIcon fontSize='large' />
                        </div>
                        <h5>Category1</h5>
                    </div>
                    <div className='browseitems_category'>
                        <div className='browseitems_categoryicon'>
                            <BallotOutlinedIcon fontSize='large' />
                        </div>
                        <h5>Category1</h5>
                    </div>
                    <div className='browseitems_category'>
                        <div className='browseitems_categoryicon'>
                            <BallotOutlinedIcon fontSize='large' />
                        </div>
                        <h5>Category1</h5>
                    </div>
                </div>
                {/* Create you div here */}


            </div>
        </div>
    )
}

export default Browseitems