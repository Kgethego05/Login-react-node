import React from 'react'
import Usernavbar from '../NavBars/Usernavbar'
import { Outlet } from 'react-router-dom'

const Userlayout = () => {
  return (
    <div>
        <Usernavbar/>
        <Outlet/>
    </div>
  )
}

export default Userlayout