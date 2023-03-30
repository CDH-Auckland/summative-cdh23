import React from 'react'
import { useNavigate } from "react-router-dom";

import Header from "../components/Header"



function Sellingitem() {
    const navigate = useNavigate();

    const backNavigation = () => {
        navigate("/buyandsell");
    }


    return (
        <div>
            <Header title={"Selling Items"} backNavigation={backNavigation} />

        </div>
    )
}

export default Sellingitem