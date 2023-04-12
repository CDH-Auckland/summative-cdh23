import React from 'react'
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext"

import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import UpdateIcon from '@mui/icons-material/Update'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

function DropdownMenu({ menuopen }) {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();


  const logoutHandler = () => {

    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
    navigate("/");
  }

  const accountHandler = () => {
    navigate("/accountdetails");
  }
  const browseitemsHandler = () => {
    navigate("/browseitems");
  }
  const wishlistHandler = () => {
    navigate("/wishlist");
  }
  const listeditemHandler = () => {
    navigate("/listeditems");
  }
  const orderhistoryHandler = () => {
    navigate("/orderhistory")
  }

  return (
    <div className={menuopen ? 'dropDownMenu' : 'dropDownMenu close'}>
      <ul>
        < li className='dropDownItem' onClick={accountHandler}>
          <div>
            <PersonIcon />
          </div>
          <a>Account</a>
        </li >
        < li className='dropDownItem' onClick={browseitemsHandler}>
          <div>
            <AssignmentIcon />
          </div>
          <a>Browse Items</a>
        </li >
        < li className='dropDownItem' onClick={wishlistHandler}>
          <div>
            <AssignmentIcon />
          </div>
          <a>Wishlist</a>
        </li >
        < li className='dropDownItem' onClick={listeditemHandler}>
          <div>
            <Inventory2Icon />
          </div>
          <a>Listed Items</a>
        </li >
        < li className='dropDownItem' onClick={orderhistoryHandler}>
          <div>
            <UpdateIcon />
          </div>
          <a>Order History</a>
        </li >
        < li className='dropDownItem' onClick={logoutHandler}>
          <div>
            <LogoutRoundedIcon />
          </div>
          <a>Logout</a>
        </li >
      </ul>

    </div>
  )
}

export default DropdownMenu