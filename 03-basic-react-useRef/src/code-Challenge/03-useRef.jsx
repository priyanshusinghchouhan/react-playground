import { useEffect } from "react";
import { useRef } from "react";

function MyComponent(){
    const inputRef = useRef(null);
    useEffect(() => {
        console.log("Componenet re-rendered");
    },[inputRef])

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.background = "yellow";
    }


    return(
        <>
        <button onClick={handleClick}>Click Me!</button>
        <input type="text" ref={inputRef} />
        </>
    )
}

export default MyComponent;