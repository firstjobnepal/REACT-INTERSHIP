import React, { useState, createContext } from 'react'

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("black");

    const changeTheme = () => {
        setTheme((theme) => theme === "white" ? "black" : "white")
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeContext, ThemeProvider };