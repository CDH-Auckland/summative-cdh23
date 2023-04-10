import React from 'react'

import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

function DropdownMenu({ menuopen }) {

  return (
    <div className={menuopen ? 'dropDownMenu' : 'dropDownMenu close'}>
      <ul>
        < li className='dropDownItem'>
          <ExitToAppOutlinedIcon />
          <a>Logout</a>
        </li >
        < li className='dropDownItem'>
          <ExitToAppOutlinedIcon />
          <a>Logout</a>
        </li >
        < li className='dropDownItem'>
          <ExitToAppOutlinedIcon />
          <a>Logout</a>
        </li >
        < li className='dropDownItem'>
          <ExitToAppOutlinedIcon />
          <a>Logout</a>
        </li >
      </ul>

    </div>
  )
}

export default DropdownMenu