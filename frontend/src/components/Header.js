import React from 'react'

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <ArrowBackOutlinedIcon fontSize='large' />
      </div>
      <div className='header__right'>
        <h1>Selling Items</h1>
      </div>
    </div>
  )
}


export default Header