import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RouterLink from './RouterLink'
import ReadFormData from './tasks/ReadFormData'
import UseStateToggle from './tasks/UseStateToggle'
import DisplayImg from './tasks/DisplayImg'
import UseEffectCountNum from './tasks/UseEffectCountNum'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <>
      <div className='relative'>
        <ThemeProvider>
          <RouterLink />
          <Routes className="bg-white-400 h-screen w-screen">
            <Route path="/useStateToggle" element={<UseStateToggle />} />
            <Route path="/readFormData" element={<ReadFormData />} />
            <Route path="/displayImg" element={<DisplayImg />} />
            <Route path='/' element={<UseEffectCountNum />} />
          </Routes>
        </ThemeProvider>
      </div >
    </>
  )
}

export default App