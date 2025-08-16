import { useState } from "react";

function Counter({initialCount, initialCountHundred}){
    const [count, setCount] = useState(initialCount);
    const [counthundred, setCounthundred] = useState(initialCountHundred);
    return(
        <div>
            <h1>Count is: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>

            <h1>Count is: {counthundred}</h1>
            <button onClick={() => setCounthundred(counthundred + 1)}>Increase</button>
        </div>
    )
};

export default Counter;