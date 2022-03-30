import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="container container_login">
        <span className="login_title">Login</span>
      <form className="login_form">
        <label>Email</label>
        <input className="login_input" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="login_input" type="password" placeholder="Enter your password..." />
        <button className="login_button">Login</button>
      </form>
        <button className="login_register-button">
        <Link to="/register">Register</Link></button>
    </div>
  )
}
