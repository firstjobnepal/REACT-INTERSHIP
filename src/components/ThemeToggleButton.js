import React, { useContext } from 'react'
import ReactSwitch from 'react-switch'
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggleButton = () => {
    const { theme, changeTheme } = useContext(ThemeContext);

    // console.log("the theme ", theme);
    return (
        <div>
            <ReactSwitch
                onChange={changeTheme}
                checked={theme === "black"} />
        </div>
    )
}

export default ThemeToggleButton