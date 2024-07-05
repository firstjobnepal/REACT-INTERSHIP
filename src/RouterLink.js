import React from 'react'
import { NavLink } from 'react-router-dom'
const RouterLink = () => {
    return (
        <div className='bg-black text-white py-4'>
            <NavLink className="mx-4" to="/usestatetoggle">UseStateToggle</NavLink>
            <NavLink className="mx-4" to="/readformdata">ReadFormData</NavLink>
            <NavLink to="/">DisplayImg</NavLink>
        </div>
    )
}

export default RouterLink