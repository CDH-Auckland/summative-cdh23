import React from 'react'
import { useNavigate } from "react-router-dom";

import Header from "../components/Header"



function Sellingitem() {
    const navigate = useNavigate();

    const backNavigation = () => {
        navigate("/buyandsell");
    }


    return (
        <div className='wrapper'>
            <Header title={"Selling Items"} backNavigation={backNavigation} />
            <div className='wrapper__sub'>
                <div>
                    <h4>Update your selling information</h4>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sellingitem