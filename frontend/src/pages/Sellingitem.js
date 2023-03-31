import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";




import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import Header from "../components/Header"



function Sellingitem() {
    const navigate = useNavigate();
    const [inputs, SetInputs] = useState({ category: "", type: "", title: "", description: "", img_url1: "", img_url2: "", img_url3: "", });

    const categoryData = ["Category1", "Category2", "Category3", "Category4", "Category5", "Category6"];
    const typeData = ["DIY Kiy", "Ready to use", "Download"];

    const backNavigation = () => {
        navigate("/buyandsell");
    }

    const submitClickHandler = () => {
        console.log(inputs);
    }
    const selectChange = (e: SelectChangeEvent<String>, child: React.ReactNode) => {
        SetInputs(inputs => ({
            ...inputs,
            [e.target.name]: e.target.value
        }));
        console.log(e.target.name + " ---- " + e.target.value);
    };



    return (
        <div className='wrapper'>
            <Header title={"Selling Items"} backNavigation={backNavigation} />
            <div className='wrapper__sub'>
                <div className='sellingitem__titleblock'>
                    <h4>Update your selling information</h4>
                    <div className='sellingitem__titleblock__icon'>
                        <Inventory2OutlinedIcon />
                    </div>
                </div>
                <div className='paddinginline__small'>
                    <h4>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat.
                    </h4>
                </div>
                <div className='sellingitem__inputblocks'>

                    <FormControl sx={{ m: 1, minWidth: 290 }}>
                        <InputLabel htmlFor="category-select">Select Category</InputLabel>
                        <Select
                            name="category"
                            id="category-select"
                            value={inputs.category}
                            label="Select Category"
                            onChange={selectChange}
                        >
                            {categoryData.map((category, index) => {
                                return <MenuItem key={index} value={category}>{category}</MenuItem>
                            })}

                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 290 }}>
                        <InputLabel htmlFor="type-select">Select Type</InputLabel>
                        <Select
                            name="type"
                            id="type-select"
                            value={inputs.type}
                            label="Select Type"
                            onChange={selectChange}
                        >
                            {typeData.map((type, index) => {
                                return <MenuItem key={index} value={type}>{type}</MenuItem>
                            })}

                        </Select>
                    </FormControl>
                    <div className='sellingitem__addtitle'>
                        <h5>Add Title</h5>
                        <input type="text" placeholder="Title" />
                    </div>
                    <button onClick={submitClickHandler}>SUBMIT</button>

                </div>
            </div>
        </div>
    )
}

export default Sellingitem