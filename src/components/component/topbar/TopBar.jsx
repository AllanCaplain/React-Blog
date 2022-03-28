import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiSearchAlt2} from 'react-icons/bi'
import logo from '../../../assets/59160.jpg'

export default function TopBar() {
  return (
    <div className="container container_topbar">
        <div className="topleft">
          <FaFacebookF className='topbar_icon'/>
          <FaTwitter className='topbar_icon' />
          <AiOutlineInstagram className='topbar_icon' />
        </div>
        <div className="topcenter">
          <ul className='toplist'>
            <li className='toplist_item'>HOME</li>
            <li className='toplist_item'>ABOUT</li>
            <li className='toplist_item'>CONTACT</li>
            <li className='toplist_item'>WRITE</li>
            <li className='toplist_item'>LOGOUT</li>
          </ul>
        </div>
        <div className="topright">
          <img src={logo} alt="logo" className='topimg'/>
          <BiSearchAlt2 className='topbar_search-icon'/>
        </div>
    </div>
  )
}
