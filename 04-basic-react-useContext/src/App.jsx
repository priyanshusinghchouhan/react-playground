import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import {UserProvider, Profile} from '../src/code-challenges/UserContext'
import {ThemeProvider, Toolbar} from '../src/code-challenges/Theme-Toggler'


function App() {
  return (
    // <>
    //   <UserProvider>
    //     <Profile/>
    //   </UserProvider>
    // </>

    <>
    <ThemeProvider>
      <Toolbar />
    </ThemeProvider>
    </>
  )
}

export default App
