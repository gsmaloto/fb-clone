import React from 'react'
import "./SidebarRow.css"
const SidebarRow = ({icon, title}) => {
  return (
    <div className='sidebarRow'>
            <img className='sidebarRow__icon' src={icon} alt="" />
            <h4 className='sidebarRow__title'>{title}</h4>
    </div>
  )
}

export default SidebarRow