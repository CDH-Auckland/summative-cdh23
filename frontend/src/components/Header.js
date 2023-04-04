import React from 'react'

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

function Header(props) {


  const backClickHandler = () => {
    props.backNavigation();
  }

  return (
    <div className='header'>
      <div className='header__icon' onClick={backClickHandler}>
        <ArrowBackOutlinedIcon fontSize='large' />
      </div>
      <div className='header__title'>
        <h2>{props.title}</h2>
      </div>
    </div>
  )
}


export default Header