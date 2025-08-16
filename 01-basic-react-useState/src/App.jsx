import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
import { useState } from 'react'
//import Counter from "./01-code-challenges-useState/Double-Counter";
//import Characters from "./01-code-challenges-useState/Character-Counter";
//import ToggleMessage from "./01-code-challenges-useState/Show-Hide";
//import List from "./01-code-challenges-useState/Dynamic-List";
import MapFunc from './01-code-challenges-useState/Map-func'
function App() {

  return (
    // <div>
    //   <h1>Hello, it's me Priyanshu  🚀</h1>
    //   <Welcome name="Priyanshu Singh" course="Offside Trap course by Hansi Flick"></Welcome>
    //   <Welcome name="Priyanshu Singh Chouhan" course="Remontada course by Hansi Flick"></Welcome>
    //   <Welcome name="Barcelona" course="Champion course by Hansi Flick"></Welcome>
    // </div>

    // <div>
    //   <Counter initialCount={0} initialCountHundred={100}></Counter>
    // </div>

    // <div>
    //   <Characters initialCharacters={0}></Characters>
    // </div>

    // <div>
    //   <ToggleMessage initialMessage={true}></ToggleMessage>
    // </div>

    // <div>
    //   <List initialList={[]}></List>
    // </div>

    <div>
      <MapFunc></MapFunc>
    </div>
  );
}

export default App;
