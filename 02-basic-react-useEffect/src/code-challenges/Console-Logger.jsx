import { useState, useEffect } from "react";

function ConsoleLogger(){
    const [count, setCount] = useState(0);

    function increase(){
        setCount((c) => c + 1);
    }

    useEffect(() => {
        console.log(`Re-renders happened ${count} times`)

        return() => {
            console.log("removed")
        }
    },[count])

    return(
        <div>
            <h1>Count is: {count}</h1>
            <button onClick={increase}>Increase</button>
        </div>
    )
}

export default ConsoleLogger;