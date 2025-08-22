import { useState, useEffect } from "react";


function useMousePosition(){
    const [position, setPosition] = useState({ x:0, y:0 });

    useEffect(() => {
        function updatePosition(e){
            setPosition({ x: e.clientX, y: e.clientY });
        }

        window.addEventListener("mousemove", updatePosition);
        return () => window.removeEventListener("mousemove", updatePosition);
    }, [])
    
    return position;
}


function MouseTracker(){
    const { x, y } = useMousePosition();

    return <h2>Mouse Position: {x}, {y}</h2>
}

export default MouseTracker;