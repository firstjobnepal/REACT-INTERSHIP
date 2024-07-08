import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from './context/ThemeContext';
import ThemeToggleButton from './components/ThemeToggleButton';


const RouterLink = () => {
    const { theme } = useContext(ThemeContext);
    return (<>
        <div className={`bg-${theme === "black" ? "gray-700" : "blue-400"} relative text-white py-4`}>
            <NavLink className="mx-4" to="/useStateToggle">UseStateToggle</NavLink>
            <NavLink className="mx-4" to="/readFormData">ReadFormData</NavLink>
            <NavLink className="mx-4" to="/displayImg">DisplayImg</NavLink>
            <NavLink className="mx-4" to="/countNumber">CountNumber</NavLink>
            <NavLink to="/">SearchFilter</NavLink>
        </div>
        <div className='absolute right-10 top-3'>
            <ThemeToggleButton />
        </div>
    </>
    )
}

export default RouterLink