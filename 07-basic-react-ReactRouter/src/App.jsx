import { BrowserRouter } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './code-challenge/Basics'



function App() {
  return(
    <>
      <BrowserRouter>
        <Main></Main>
      </BrowserRouter>
    </>
  )
}

export default App
