import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './code-challenge/01-Basic-Atoms'
import { RecoilRoot } from 'recoil'
//import UseRecoilState from './code-challenge/02-Use-RecoilState'
//import UseSetRecoilState from './code-challenge/03-Use-Set-RecoilState'
//import MainApp from './code-challenge/04-Async-operations'
import Todo from './code-challenge/05-Atoms-Family'


function App() {

  return (
    // <RecoilRoot>
    //   <TopBar />
    // </RecoilRoot>

    // <RecoilRoot>
    //   <UseRecoilState />
    // </RecoilRoot>
    
    // <RecoilRoot>
    //   <UseSetRecoilState />
    // </RecoilRoot>

    // <RecoilRoot>
    //   <MainApp />
    // </RecoilRoot>

    <RecoilRoot>
      <Todo id={1} />
      <Todo id={1} />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={4} />

      
    </RecoilRoot>
  )
}

export default App;
