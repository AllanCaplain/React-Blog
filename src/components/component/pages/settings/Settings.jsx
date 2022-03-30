import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import {FiSettings} from 'react-icons/fi'

export default function Settings() {
  return (
    <div className="container container_settings">
      <div className="settings_wrapper">
        <div className="settings_title">
          <span className="settings_title-update">Update Your Account</span>
          <span className="settings_title-delete">Delete Account</span>
        </div>
        <form className="settings_form">
          <label>Profile Picture</label>
          <div className="settings_pp">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="file_input">
              <FiSettings className="settings_pp-icon" />
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settings_pp-input"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settings_submit-button" type="submit">
            Update
          </button>
        </form>
      </div>
        <Sidebar />
    </div>
  )
}
