import React from 'react'
import { NavLink } from 'react-router-dom'

const Usernavbar = () => {
  return (
    <div>
        <ul>
          <li><NavLink to='/Users'>Dashboard</NavLink></li>
            <li><NavLink to='/Users/viewprofile'>User Profile</NavLink></li>
            <li><NavLink to='/Users/updateprofile'>Update Profile</NavLink></li>
            <li><NavLink to='/Users/deleteaccount'>Delete Account</NavLink></li>
            <li><NavLink to='/Users/logout'>Logout</NavLink></li>
        </ul>
    </div>
  )
}

export default Usernavbar