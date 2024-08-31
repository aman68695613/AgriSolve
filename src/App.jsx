import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IndexPage from './pages/IndexPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    
      <BrowserRouter>
      <Routes>
          <Route path="/login" element={<IndexPage />} />
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
