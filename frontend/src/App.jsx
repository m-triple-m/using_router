import React from 'react'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App