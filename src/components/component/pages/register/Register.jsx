import React from 'react'

export default function Register() {
  return (
    <div className="container container_register">
        <span className="register_title">Register</span>
        <form className="register_form">
        <label>Username</label>
        <input className="register_input" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className="register_input" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="register_input" type="password" placeholder="Enter your password..." />
        <button className="register_button">Register</button>
      </form>
        <button className="register_login-button">Login</button>
    </div>
  )
}
