import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiSearchAlt2} from 'react-icons/bi'
import logo from '../../../assets/59160.jpg'
import { Link } from "react-router-dom";

export default function TopBar() {
  const user = true;
  return (
    <div className="container container_topbar">
        <div className="topleft">
          <FaFacebookF className='topbar_icon'/>
          <FaTwitter className='topbar_icon' />
          <AiOutlineInstagram className='topbar_icon' />
        </div>
        <div className="topcenter">
        <ul className="topList">
          <li className="toplist_item">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="toplist_item">ABOUT</li>
          <li className="toplist_item">CONTACT</li>
          <li className="toplist_item">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="toplist_item">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        </div>
        <div className="topright">
          <img src={logo} alt="logo" className='topimg'/>
          <BiSearchAlt2 className='topbar_search-icon'/>
        </div>
    </div>
  )
}
