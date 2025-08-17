import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import TitleUpdater from '../src/code-challenges/Title-Updater'
//import ConsoleLogger from '../src/code-challenges/Console-Logger'
//import BankData from './code-challenges/Bank-Data'
//import Clock from './code-challenges/Clock'
import ToDo from './code-challenges/To-Do'

function App() {
  return(
    // <div>
    //   <TitleUpdater></TitleUpdater>
    // </div>

    // <div>
    //   <ConsoleLogger></ConsoleLogger>
    // </div>

    // <div>
    //   <BankData></BankData>
    // </div>

    // <div>
    //   <Clock></Clock>
    // </div>

    <div>
      <ToDo></ToDo>
    </div>
  )
}

export default App
