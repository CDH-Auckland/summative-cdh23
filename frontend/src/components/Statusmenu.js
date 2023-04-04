import React from 'react'

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


function Statusmenu(props) {
    return (
        <div className='statusMenu'>
            <img className="statusMenu__usericon" src={require(`../images/user01.jpg`)} alt='' />
            <h4>{props.username}</h4>
            <div className='statusMenu__shoppingcart'>
                <ShoppingCartOutlinedIcon fontSize='large' />

            </div>
        </div>
    )
}

export default Statusmenu