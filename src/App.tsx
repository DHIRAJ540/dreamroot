import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box } from '@mui/material'
import Home from './Pages/Home'
import WhatWeBuild from './Pages/Home/Components/WhatWeBuild'
import Projects from './Pages/Home/Components/Projects'
import CoreValues from './Pages/Home/Components/CoreValues'
import Footer from './Pages/Home/Components/Footer'

function App() {


  return (
    <Box>
      <Home />
      <WhatWeBuild />
      <Projects />
      <CoreValues />
      <Footer />
    </Box>
  )
}

export default App
