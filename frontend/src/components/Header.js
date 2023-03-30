import React from 'react'


import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

function Header(props) {


  const backHandler = () => {
    props.backNavigation();
  }

  return (
    <div className='header'>
      <div className='header__left' onClick={backHandler}>
        <ArrowBackOutlinedIcon fontSize='large' />
      </div>
      <div className='header__right'>
        <h1>{props.title}</h1>
      </div>
    </div>
  )
}


export default Header