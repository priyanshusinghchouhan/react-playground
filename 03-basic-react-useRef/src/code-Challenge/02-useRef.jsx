import { useState, useRef } from "react";


function Counter(){
    const [count, setCount] = useState(0);
    const clickRef = useRef(0);
    

    console.log("Component rendered");

    function handleClick(){
        setCount(prev => prev + 1);
        clickRef.current += 1;
        console.log("Total clicks (ref): ", clickRef.current)
    }


    return(
        <>
        <h1>Count is: {count}</h1>
        <button onClick={handleClick}>Increase</button>
        </>
    )
}


export default Counter;