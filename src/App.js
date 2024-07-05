import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RouterLink from './RouterLink'
import ReadFormData from './tasks/ReadFormData'
import UseStateToggle from './tasks/UseStateToggle'
import DisplayImg from './tasks/DisplayImg'
const App = () => {
  return (
    <>
      <RouterLink />
      <Routes>
        <Route path="/usestatetoggle" element={<UseStateToggle />} />
        <Route path="/readformdata" element={<ReadFormData />} />
        <Route path="/" element={<DisplayImg />} />
      </Routes>
    </>
  )
}

export default App