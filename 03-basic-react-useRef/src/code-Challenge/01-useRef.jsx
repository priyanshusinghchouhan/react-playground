import { useEffect, useRef } from "react";

function Ref(){
    const divRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            console.log("Income changed")
            divRef.current.innerHTML = "10"
        }, 5000);
    }, [])


    const income = 20000;

    return(
        <div>
            hi there, your income is : <div ref={divRef}>{income}</div>
        </div>
    )
}


export default Ref;