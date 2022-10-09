import React from 'react'
import './App.css'
import IntroCard from './components/IntroCard'
import {createTheme, ThemeProvider } from '@mui/material'


function App() {

 
  const theme = createTheme({
    typography:{
      fontSize: 14
    }
  })


  return (
   <>
    <ThemeProvider theme={theme}>

    <div className="App">
  <IntroCard />
    </div>

    </ThemeProvider>
   </>
  )
}

export default App
