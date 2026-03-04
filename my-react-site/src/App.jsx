import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Join from './pages/Join'
import Gallery from './pages/Gallery'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/join" element={<Join />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  )
}

export default App
