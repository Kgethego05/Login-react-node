import React from 'react'
import { NavLink } from 'react-router-dom'

const Homenavbar = () => {
  return (
    <div>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
        </ul>
    </div>
  )
}

export default Homenavbar