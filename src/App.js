import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { smooth } from './utils/smooth';

const App = () => {
  useEffect(() => {
    smooth();
  })
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
  )
}

export default App