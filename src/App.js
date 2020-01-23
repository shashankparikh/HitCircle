import React from 'react'
import logo from './logo.svg'
import './App.css'
import { ThemeProvider } from 'styled-components'
import theme from "./styles/theme";
import Home from './Epics/Pages/home'
function App () {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <header className='App-header'>
          <Home />
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App
