import React from 'react'
import Homenavbar from '../NavBars/Homenavbar'
import { Outlet } from 'react-router-dom'

const Homelayout = () => {
  return (
    <div>
        <Homenavbar/>
        <Outlet/>
    </div>
  )
}

export default Homelayout