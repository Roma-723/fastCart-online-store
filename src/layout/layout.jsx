import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
         <div className='flex'>
         <div>
            <NavLink to="/">
                <p>Home</p>
            </NavLink>
            <NavLink to="contact">
                <p>Home</p>
            </NavLink>
         </div>
         </div>
      <Outlet/>
    </div>
  )
}

export default Layout
