import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import RouterLink from './RouterLink'
import ReadFormData from './tasks/ReadFormData'
import UseStateToggle from './tasks/UseStateToggle'
import DisplayImg from './tasks/DisplayImg'
import UseEffectCountNum from './tasks/UseEffectCountNum'
import SearchFilter from './tasks/SearchFilter'

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
            <Route path='/countNumber' element={<UseEffectCountNum />} />
            <Route path="/" element={<SearchFilter />} />
          </Routes>
        </ThemeProvider>
      </div >
    </>
  )
}

export default App